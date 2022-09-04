import Loader from "components/Loader/Loader";
import { getMovieDetails } from "helper/api";
import { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import BtnGoBack from "components/BtnGoBack/BtnGoBack";
import Chackman from "../../image/58e0ccb473a4915b2e1fa0fa.png"
import { TitleH2, CardNavLink, CardTitle, DivCard, DivLink, DivText, Image, Text } from "./MovieDetails.styled";
import Error from "components/Error/Error";

const MovieDetails = () => {
    const {movieId} = useParams();

    const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
    });

    const location = useLocation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));

                const data = await getMovieDetails(movieId);
                setState(prevState => ({
                    ...prevState,
                    item: data,
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    const { item, loading, error } = state;
    const { title, overview, poster_path, genres} = state.item;
    const voteAverage = Math.ceil(item.vote_average * 10);
    return (
        <>
            <BtnGoBack/>

            {loading && <Loader />}
            
            {error && <Error/>}
            
            <TitleH2>Movie Details</TitleH2>
        <DivCard>
            {poster_path ? (
                <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />) : 
                (<Image src={Chackman} alt={title}/>)}
        <DivText>
            <CardTitle>{title}</CardTitle>
            <Text><b>Rating:</b> {voteAverage}%</Text>
            <Text><b>Overview:</b> {overview}</Text>
            <Text><b>Genres:</b>
                {genres &&
                    genres.map(({ id, name }) => (
                    <Text key={id}>{name}</Text>
                ))}
            </Text>
        </DivText>
        </DivCard>
        <DivLink>
            <CardNavLink state={{from: location?.state?.from}} to={`/movies/${movieId}/cast`}>
                Cast
            </CardNavLink>
            <CardNavLink state={{from: location?.state?.from}} to={`/movies/${movieId}/reviews`}>
                Reviews
            </CardNavLink>
        </DivLink>
        <Outlet/>
        </>
    );
}

export default MovieDetails;