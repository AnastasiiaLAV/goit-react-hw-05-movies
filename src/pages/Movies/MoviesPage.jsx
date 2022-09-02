import Error from "components/Error/Error";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { searchMovies } from "helper/api";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Serchbar from "../../components/Searchbar/Searchbar";

const MoviesPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
        });

    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');
    
    const onSearch = ({query}) => {
        setSearchParams({query});
    }

    useEffect(() => {
        const fetchSearchMovies = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));

                const data = await searchMovies(query);

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

        if(query){
            fetchSearchMovies();
        }
        
    }, [query]);
    
        const { items, loading, error } = state;
    
        return (
        <>
            <Serchbar onSubmitForm={onSearch}/>
            {loading && <Loader />}
            {items.length > 0 && <MoviesList items={items}/>}
            {error && <Error/>}
        </>
        )
}

export default MoviesPage;