import {lazy, Suspense} from 'react'
import { Route, Routes } from "react-router-dom";
import Loader from './Loader/Loader';

const Menu = lazy(() => import ("./Menu/Menu"));
const HomePage = lazy(() => import ("pages/Home/HomePage"));
const MoviesPage = lazy(() => import ("pages/Movies/MoviesPage"));
const NotFoundPage = lazy(() => import ("pages/NotFoundPage"));
const MovieDetails = lazy(() => import ("./MovieDetails/MovieDetails"));
const Reviews = lazy(() => import ("./Reviews/Reviews"));
const Cast = lazy(() => import ("./Cast/Cast"));

export const App = () => {
  return (
    <>
      <Menu/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*"  element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </>
  );
};
