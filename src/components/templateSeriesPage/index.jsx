import React, { useState, useEffect } from "react";
import SeriesHeader from "../headerSeries";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getSeriesImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
  console.log("series page ",movie)
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }],
    getSeriesImages
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
      <SeriesHeader series={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
      <Grid item xs={3}>
  <div sx={styles.gridListRoot}>
    
      <ImageListItem key={images[0].file_path} sx={styles.gridListTile} cols={1}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${images[0].file_path}`}
          alt={images[0].poster_path}
        />
      </ImageListItem>
  </div>
  <br />
                    <br />
                    <Typography variant="h5" component="p">
                        More Info
                    </Typography>
                    <Grid container direction="column" spacing={1}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Last air date" secondary = {movie.last_air_date?movie.last_air_date:"No information"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Number of episodes" secondary={movie.number_of_episodes?movie.number_of_episodes:"No information" } />
                            </ListItem>
                            <ListItem>
                               <ListItemText primary="Created by " secondary={ movie.created_by.length > 0 ? movie.created_by.map(company => company.name).join(", ") : "No information"}/>
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

export default TemplateSeriesPage;
