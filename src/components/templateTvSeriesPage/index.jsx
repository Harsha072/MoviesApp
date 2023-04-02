import React from "react";
import Header from "../headerMovieList/index";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList/index";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function SeriesListPageTemplate({ movies, title, action }) 
  {
    console.log("series :::",movies)
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {   <SeriesList action={action} movies={movies} />
        /* <MovieList
          selectFavourite={selectFavourite}
          movies={movies}
        ></MovieList> */}
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;
