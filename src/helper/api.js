import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2614fd8eb411c7000221cf444d5a4c67';

const instance  = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    // params:{
    //     apiKey: "2614fd8eb411c7000221cf444d5a4c67",
    // }
});
console.log('instance', instance)
// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.

// export const getTrending = async () => await instance.get(`trending/movie/day`);

// export const getTrending = async () => {
//     const { data } = await axios.get(`${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&include_adult=false`);
//   return data;
// }
export const getTrending = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
}

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.

export const searchMovies = async (query) => await instance.get('search/movie', {
        params:{
            query,
        }
    }
)

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.

export const getMovieDetails = async (movie_id) => await instance.get(`movie/${movie_id}`)

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.

export const getMovieCredits = async (movie_id) => await instance.get(`movie/${movie_id}/credits`)

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

export const getMovieReviews = async (movie_id) => await instance.get(`movie/${movie_id}/reviews`)
