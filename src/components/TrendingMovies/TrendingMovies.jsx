import Loader from "components/Loader/Loader";
import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import MoviesList from "components/MoviesList/MoviesList";
import { getTrending } from "helper/api";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";



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

    return (
        <>
            {loading && <Loader />}
            {items.length > 0 && <MoviesList items={items}/>}
            {error && <p>...Posts load failed<PacmanErrorSpan><PacmanLoader color="#eb1052" size={10}/></PacmanErrorSpan></p>}
        </>
    )
}

export default TrendingMovies;