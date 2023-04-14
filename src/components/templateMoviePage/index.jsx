import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieCredits, getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
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

const TemplateMoviePage = ({ movie, children,credits }) => {
  // const [images, setImages] = useState([]);
 
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );

  console.log("credits ",credits)
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
  <br />
                    <br />
                    <Typography variant="h5" component="p">
                        More Info
                    </Typography>
                    <Grid container direction="column" spacing={1}>
                        <List>
                           
                           
                            <ListItem>
                            <ListItemText primary="Cast " secondary={ credits.cast.map(cast=> cast.name)}/>
                            </ListItem>
                            <ListItem>
                            <ListItemText primary="Production Companies " secondary={movie.production_companies.map(company => company.name).join(", ")}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Origin" secondary={movie.production_countries.length>0 ?movie.production_countries.map(country=>country.name).join(","):"No information"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Languages Spoken" secondary={movie.spoken_languages.length>0? movie.spoken_languages.map(language=>language.english_name).join(","):"No information"} />
                            </ListItem>
                            <ListItem>
                                {/* <ListItemText primary="Also Known As" secondary={movie.also_known_as.join(", ")} /> */}
                            </ListItem>
                        </List>
                    </Grid> 
</Grid>


        <Grid item xs={9}>
          {children}
          
        </Grid>
     
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
