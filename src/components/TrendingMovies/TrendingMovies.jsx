import Loader from "components/Loader/Loader";
import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import { getTrending } from "helper/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { GalleryMovies, GalleryMoviesCard, GalleryMoviesImg } from "./TrendingMovies.styled";


const TrendingMovies = () => {
    const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
    });

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));

                const data = await getTrending();
                console.log('result', data);
                setState(prevState => ({
                    ...prevState,
                    items: [...data.results],
                    
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
        fetchTrendingMovies();
    }, [setState]);

    const { items, loading, error } = state;

    const elements = items.map(({ id, title, poster_path }) => 
            <GalleryMoviesCard key={id}>
                <Link to={`/movies/${id}`}>
                    <GalleryMoviesImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                    {title}
                </Link>
            </GalleryMoviesCard>);
    return (
        <>
            {loading && <Loader />}
            <GalleryMovies>{elements}</GalleryMovies>
            {error && <p>...Posts load failed<PacmanErrorSpan><PacmanLoader color="#eb1052" size={10}/></PacmanErrorSpan></p>}
        </>
    )
}

export default TrendingMovies;