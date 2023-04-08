import React from "react";
import SeriesCard from "../seriesCard";
import Grid from "@mui/material/Grid";

const SimilarSeriesList = ( {series,action }) => {
  console.log(series,"in simila")
  let seriesCards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <SeriesCard key={m.id} series={m} action={action} />
    </Grid>
  ));
  return seriesCards;
};

export default SimilarSeriesList;