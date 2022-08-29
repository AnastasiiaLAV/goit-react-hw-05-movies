import Loader from "components/Loader/Loader";
import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import { getMovieDetails } from "helper/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const MovieDetails = () => {
    const {movieId} = useParams();
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
                console.log('result', data);
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
    }, [setState]);

    const { loading, error } = state;
    const { title, vote_average, overview, poster_path, genres} = state.item;
    // const elements = item.map(({ id, title }) => <li key={id}>
    //             <Link to={`/movies/${id}`}>{title}</Link>
    //         </li>);
    
    console.log('state.item', state.item)
    return (
        <div>
            {loading && <Loader />}
            
            {error && <p>...Posts load failed<PacmanErrorSpan><PacmanLoader color="#eb1052" size={10}/></PacmanErrorSpan></p>}
            <h2>Movie Details</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
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