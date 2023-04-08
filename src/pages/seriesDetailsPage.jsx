import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
import useMovie from "../hooks/useMovie";
import { getSeries,getSimilarSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";



const SeriesDetailsPage = (props) => {
 
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["series", { id: id }],
    getSeries
  );

  const { data:similarSeries} = useQuery(
    ["similarSeries", { id: id }],
    getSimilarSeries
  );

  if (movie) {
    // Use the data here
    console.log("for data ",similarSeries);
  } else {
    // Handle the case where the data is not yet available
  }
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <SeriesDetails series={movie} similarSeries={similarSeries}
             action={(movie) => {
              return  
            }} />
             
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;
