import Loader from "components/Loader/Loader";
import { PacmanErrorSpan } from "components/Loader/Loader.styled";
import MoviesList from "components/MoviesList/MoviesList";
import { searchMovies } from "helper/api";
import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";
import Serchbar from "../../components/Searchbar/Searchbar";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
        });
    const onSearch = ({query}) => {
        setQuery(query);
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
            {error && <p>...Posts load failed<PacmanErrorSpan><PacmanLoader color="#eb1052" size={10}/></PacmanErrorSpan></p>}
        </>
        )
}

export default MoviesPage;