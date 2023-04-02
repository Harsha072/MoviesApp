import React, { useContext, useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import MovieList from "../movieList";
import ActorsKnownForList from "../actorsKnownForList";
import { MoviesContext } from "../../contexts/moviesContext";
const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    chipLabel: {
        margin: 0,
    },
    fab: {
        position: "fixed",
        top: 50,
        right: 2,
    },
};

const ActorDetails = ({ movie, action,credits}) => {
    const [drawerOpen, setDrawerOpen] = useState(false); // New
 
console.log("in detlkjlfd ",credits.movie.known_for)
 


    return (
        <>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>

            <Typography variant="h6" component="p">
                {movie.biography}
            </Typography>
            <br></br>
            <Paper component="ul" sx={styles.chipSet}>
            <Typography variant="body1" align="left" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                Place of Birth: {movie.place_of_birth}
            </Typography>
           </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Typography variant="body1" align="left" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Also Known as:&nbsp;
                </Typography>
                {movie.also_known_as.map((g, index) => (
                    <li key={index} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {index === 0 ? g : `, ${g}`}
                    </li>
                ))}

            </Paper>
            <br />
            <Paper component="ul" sx={styles.chipSet}>
      <Typography variant="h5" component="h3">
          Similar movies
      </Typography>
      </Paper>
      <br />
      <Grid item container spacing={5}>
      <ActorsKnownForList movies ={credits.movie.known_for} action={action} ></ActorsKnownForList> 
      </Grid>
        </>
    );
};
export default ActorDetails;
