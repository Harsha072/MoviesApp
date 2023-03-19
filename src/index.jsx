import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upComingMoviePage";



const App = () => {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul> */}
      <SiteHeader />      {/* New Header  */}
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
