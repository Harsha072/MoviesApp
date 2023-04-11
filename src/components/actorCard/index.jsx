import React,  { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import ActorDetails from "../actorDetails";


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  profile:{
    backgroundColor: "red",
     width: "150px",
     height: "150px",
     
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  }
};

export default function ActorCard({ movie, action }) 
  {
  const context = useContext(MoviesContext);
 
  const { favouritesActor, addToFavourites } = useContext(MoviesContext);

  // if (favouritesActor.find((id) => id === movie.id)) {
  //   movie.favourite = true;
  // } else {
  //   movie.favourite = false
  // }
  

  const handleSetKnownFor = (actor) => {
    context.setKnown(actor);
  };

  

  return (
    <Card sx={styles.card}>
       <CardHeader
      sx={styles.header}
      avatar={
        movie.favourite ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p">
          {movie.name}{" "}
        </Typography>
      }
    />

 
      <div style={{ display: "flex", alignItems: "center" }}><Avatar sx={styles.profile} alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`} /></div>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            
          </Grid>
          <Grid item xs={6}>
          
          </Grid>
        </Grid>
      </CardContent>
      <CardActions onClick={() => handleSetKnownFor(movie)}  disableSpacing>
      {action(movie)}
      
      <Link to={`/actor/${movie.id}`}>
  <div style={{ display: "flex", alignItems: "center" }}>
    
    <Button onClick={() => handleSetKnownFor(movie)} variant="outlined" size="medium" color="primary">
      More Info ...
    </Button>
  </div>
</Link>

      </CardActions>
    </Card>
  );
}