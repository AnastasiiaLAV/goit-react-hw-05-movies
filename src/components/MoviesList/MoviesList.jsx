import { Link } from "react-router-dom";
import { GalleryMoviesCard, GalleryMovies, GalleryMoviesImg } from "./MoviesList.styled";

const MoviesList = ({items}) => {
    const elements = items.map(({ id, title, poster_path }) => 
        <GalleryMoviesCard key={id}>
            <Link to={`/movies/${id}`}>
                <GalleryMoviesImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <p>{title}</p> 
            </Link>
        </GalleryMoviesCard>);
    return (
        <GalleryMovies>{elements}</GalleryMovies>
    );
}

export default MoviesList;

MoviesList.defaultProps ={
    items: [],
}