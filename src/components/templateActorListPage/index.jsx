import React from "react";
import Header from "../headerMovieList/index";
import Grid from "@mui/material/Grid";
import ActorsList from "../actorsList/index";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function ActorsListPageTemplate({ movies, title, action,setPage,isFetching,isPreviousData,page}) 
  {
    console.log("movies :::",action)
    
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header page={page} isFetching={isFetching}
        isPreviousData={isPreviousData} setPage={setPage} title={title} movies={movies} />
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
