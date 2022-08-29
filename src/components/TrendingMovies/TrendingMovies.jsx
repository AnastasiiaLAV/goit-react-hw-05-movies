import Loader from "components/Loader/Loader";
import { getTrending } from "helper/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    const elements = items.map(({ id, title }) => <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
            </li>);

    return (
        <>
            {loading && <Loader />}
            <ol>{elements}</ol>
            {error && <p>...Posts load failed<span><PacmanLoader color="#eb1052" size={10}/></span></p>}
        </>
    )
}

export default TrendingMovies;