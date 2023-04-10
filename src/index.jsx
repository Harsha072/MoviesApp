import React from "react";
// import './components/login/style.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import Auth from "./components/login/Auth";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upComingMoviePage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviePage from "./pages/popularMoviePage";
import PopularActorsPage from "./pages/popularActorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage"
import TvSeriesPage from "./pages/tvSeriesPage";
import SeriesDetailsPage from "./pages/seriesDetailsPage";

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
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>


        {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favourites">Favourites</Link>
        </li>
      </ul> */}
        <SiteHeader />
        <MoviesContextProvider>     {/* New Header  */}

          {session && (
            <>
              <SiteHeader session={session} />
              <Routes>
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviePage />} />
                <Route path="/movies/popular" element={<PopularMoviePage />} />
                <Route path="/actors/popular" element={<PopularActorsPage />} />
                <Route path="/tv/popular" element={<TvSeriesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/series/:id" element={<SeriesDetailsPage />} />
                <Route path="/actor/:id" element={<ActorDetailsPage />} />
                <Route path="/" element={<HomePage key={session.user.id} session={session} />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              </Routes>
            </>
          )}
          {!session && (
            <>
             <Auth></Auth>
            </>
          )}







        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
