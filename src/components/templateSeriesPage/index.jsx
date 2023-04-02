import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplateSeriesPage = ({ movie, children }) => {
  // const [images, setImages] = useState([]);
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  // useEffect(() => {
  //   getMovieImages(movie.id).then((images) => {
  //     setImages(images);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
      <Grid item xs={3}>
  <div sx={styles.gridListRoot}>
    <ImageList cols={1}>
      <ImageListItem key={images[0].file_path} sx={styles.gridListTile} cols={1}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${images[0].file_path}`}
          alt={images[0].poster_path}
        />
      </ImageListItem>
    </ImageList>
  </div> 
</Grid>


        <Grid item xs={9}>
          {children}
          
        </Grid>
     
      </Grid>
    </>
  );
};

export default TemplateSeriesPage;
