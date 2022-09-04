import Error from "components/Error/Error";
import Loader from "components/Loader/Loader";
import { getMovieReviews } from "helper/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item, List } from "./Reviews.styled";

const Reviews = () => {
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

                const data = await getMovieReviews(movieId);
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
        fetchMovieDetails();
    }, [movieId]);

    const { items, loading, error } = state;
    const elements = items.map(({ id, author, content, url}) => 
        <Item key={id}>
            <h3>{author}</h3>
            <a href={url}>More details</a>
            <p>{content}</p>
        </Item>);

    return (
        <>
        {loading && <Loader />}
        <List>
            {elements}
        </List>
        {error && <Error/>}
        </>
    );
}

export default Reviews;