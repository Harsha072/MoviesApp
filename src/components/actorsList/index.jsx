import React from "react";
import ActorCard from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorsList = ( {movies, action }) => {
  console.log(movies)
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default ActorsList;
