import React from "react";
import Header from "../headerMovieList/index";
import Grid from "@mui/material/Grid";
import ActorsList from "../actorsList/index";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function ActorsListPageTemplate({ movies, title, action }) 
  {
    console.log("movies :::",movies)
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {   <ActorsList action={action} movies={movies} />
        /* <MovieList
          selectFavourite={selectFavourite}
          movies={movies}
        ></MovieList> */}
      </Grid>
    </Grid>
  );
}
export default ActorsListPageTemplate;
