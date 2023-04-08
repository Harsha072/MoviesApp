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


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function SeriesCard({ series, action }) 
  {
    console.log("series ",series)
  const { favourites, addToFavourites } = useContext(MoviesContext);

  

  return (
    <Card sx={styles.card}>
       <CardHeader
      sx={styles.header}
      
      title={
        <Typography variant="h5" component="p">
          {series.name}{" "}
        </Typography>
      }
    />

      <CardMedia
        sx={styles.media}
        image={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {series.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {series.vote_average
}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(series)}
      
      <Link to={`/series/${series.id}`}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <PlaylistAddIcon style={{ marginRight: "8px" }} />
    <Button variant="outlined" size="medium" color="primary">
      More Info ...
    </Button>
  </div>
</Link>

      </CardActions>
    </Card>
  );
}