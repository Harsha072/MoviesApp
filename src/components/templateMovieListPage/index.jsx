import React from "react";
import Header from "../headerMovieList/index";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList/index";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function MovieListPageTemplate({ movies, title, action,setPage,isFetching,isPreviousData,page }) 
  {
    console.log("movies :::")
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header page={page} isFetching={isFetching}
        isPreviousData={isPreviousData} setPage={setPage} title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {   <MovieList action={action} movies={movies} />
        /* <MovieList
          selectFavourite={selectFavourite}
          movies={movies}
        ></MovieList> */}
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
