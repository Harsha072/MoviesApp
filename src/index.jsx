import React from "react";
// import './components/login/style.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import Auth from "./components/login/Auth";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteSeriesPage from "./pages/favouriteSeriesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upComingMoviePage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AddSeriesReviewPage from './pages/addSeriesReviewPage'
import PopularMoviePage from "./pages/popularMoviePage";
import PopularActorsPage from "./pages/popularActorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage"
import TvSeriesPage from "./pages/tvSeriesPage";
import SeriesDetailsPage from "./pages/seriesDetailsPage";
import AuthContextProvider from "./contexts/authContext";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./PrivateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});




const App = () => {
 

 
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthContextProvider>  
     <SiteHeader />
       
        <MoviesContextProvider>     {/* New Header  */}
        <Routes>  
    
                <Route path="/movies/favourite" element={<FavouriteMoviesPage />} />
                <Route path="/series/favourite" element={<FavouriteSeriesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviePage />} />
                <Route path="/movies/popular" element={<PopularMoviePage />} />
                <Route path="/actors/popular" element={<PopularActorsPage />} />
                <Route path="/tv/popular" element={<TvSeriesPage />} />
                
                {/* <Route path="/movies/:id" element={<MoviePage />} /> */}
                <Route path="/movies/:id" element={
                <PrivateRoute>
                  <MoviePage />
                </PrivateRoute>}
   />
                <Route path="/series/:id" element={<SeriesDetailsPage />} />
                <Route path="/actor/:id" element={<ActorDetailsPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/reviewsSeries/form" element={<AddSeriesReviewPage />} />
              
          </Routes>
    
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
