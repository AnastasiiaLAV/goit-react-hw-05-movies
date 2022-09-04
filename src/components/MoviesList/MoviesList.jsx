import { Link, useLocation } from "react-router-dom";
import { GalleryMoviesCard, GalleryMovies, GalleryMoviesImg } from "./MoviesList.styled";
import Chackman from "../../image/58e0ccb473a4915b2e1fa0fa.png";


const MoviesList = ({items}) => {
    const location = useLocation();
    
    const elements = items.map(({ id, title, poster_path}) => 
        <GalleryMoviesCard key={id}>
            <Link state={{from: location}} to={`/movies/${id}`}>
            {poster_path ? (
                <GalleryMoviesImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />) : 
                (<GalleryMoviesImg src={Chackman} alt="checkman"/>)}
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