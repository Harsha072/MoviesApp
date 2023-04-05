import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const ActorsKnownForList = ( {movies,action }) => {
  console.log(movies,"in simila")

  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={10} md={8} lg={6} xl={4}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default ActorsKnownForList;