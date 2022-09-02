import Error from "components/Error/Error";
import Loader from "components/Loader/Loader";
import { getMovieCredits } from "helper/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chackman from "../../image/58e0ccb473a4915b2e1fa0fa.png"
import { CastImg, CastLi, CastUl } from "./Cast.styled";

const Cast = () => {
    const {movieId} = useParams();
    const [state, setState] = useState({
        items: [],
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

                const data = await getMovieCredits(movieId);
                setState(prevState => ({
                    ...prevState,
                    items: [...data.cast],
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

    const { items, loading, error } = state;
    const elements = items.map(({ id, profile_path, name }) => 
        <CastLi key={id}>
            {profile_path ? (
                <CastImg src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />) : 
                (<CastImg src={Chackman} alt={name}/>)
                }
                <p>{name}</p> 
        </CastLi>);
    return (
        <>
        {loading && <Loader />}
        {error && <Error/>}
        <CastUl>
            {elements}
        </CastUl>
        
        </>
    );
}

export default Cast;