import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2614fd8eb411c7000221cf444d5a4c67';

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.

export const getTrending = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
}

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.

export const searchMovies = async (query) => {
    const { data } = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  return data;
}

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.

export const getMovieDetails = async (id) => {
    const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
}

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
export const getMovieCredits = async (id) => {
    const { data } = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return data;
}

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
}
