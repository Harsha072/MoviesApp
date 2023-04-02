import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const SimilarMovieList = ( {movies,action }) => {
  console.log(movies,"in simila")
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default SimilarMovieList;