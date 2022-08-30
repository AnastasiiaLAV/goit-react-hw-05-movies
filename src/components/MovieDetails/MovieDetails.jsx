import Loader from "components/Loader/Loader";
import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import { getMovieDetails } from "helper/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const MovieDetails = () => {
    const {movieId} = useParams();
    const navigate = useNavigate();
    console.log('movie_id', movieId)
    const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
    });

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

    const goBack = () => navigate(-1);
    const { loading, error } = state;
    const { title, vote_average, overview, poster_path, genres} = state.item;

    return (
        <div>
            <button onClick={goBack}>Go back</button>

            {loading && <Loader />}
            
            {error && <p>...Posts load failed<PacmanErrorSpan><PacmanLoader color="#eb1052" size={10}/></PacmanErrorSpan></p>}
            <h2>Movie Details</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <h2>{title}</h2>
            <p>{vote_average}</p>
            <p>{overview}</p>
            <p>{genres &&
                genres.map(({ id, name }) => (
            <p key={id}>{name}</p>
            ))}</p>
            
        </div>
    );
}

export default MovieDetails;