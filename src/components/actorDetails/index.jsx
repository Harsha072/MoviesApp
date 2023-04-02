import React, { useState } from "react";
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
import SimilarMovieList from "../similarMovieList";

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

const ActorDetails = ({ movie, action }) => {
    const [drawerOpen, setDrawerOpen] = useState(false); // New
    console.log("in actors details ", movie)
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

            {/* <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper> */}
            <br />
        </>
    );
};
export default ActorDetails;
