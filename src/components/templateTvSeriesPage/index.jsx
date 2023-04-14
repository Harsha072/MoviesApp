import React from "react";
import Header from "../headerMovieList/index";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList/index";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function SeriesListPageTemplate({ series, title, action,setPage,isFetching,isPreviousData,page }) 
  {
    console.log("series :::",series)
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header page={page} isFetching={isFetching}
        isPreviousData={isPreviousData} setPage={setPage} title={title} movies={series} />
      </Grid>
      <Grid item container spacing={5}>
        {   <SeriesList action={action} series={series} />
        /* <MovieList
          selectFavourite={selectFavourite}
          movies={movies}
        ></MovieList> */}
      </Grid>
    </Grid>
  );
}
export default SeriesListPageTemplate;
