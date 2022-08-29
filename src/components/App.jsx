import HomePage from "pages/Home/HomePage";
import MoviesPage from "pages/Movies/MoviesPage";
import NotFoundPage from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu/Menu";

export const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        {/* <Route path="/movies/:movieId" element={<Movies />}/>
        <Route path="/movies/:movieId/cast"  element={<Movies/>}/>
        <Route path="/movies/:movieId/reviews"  element={<Movies/>}/> */}
        <Route path="*"  element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};
