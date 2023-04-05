import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Avatar from "@mui/material/Avatar";
import ActorHeader from "../headerActor"
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const styles = {
    gridListRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    gridList: {
        width: 450,
        height: '100vh',
    },
    profile: {
        backgroundColor: 'rgb(255, 0, 0)',
        width: '250px',
        height: '250px',
    },
};

const TemplateMoviePage = ({ movie, children }) => {
    // const [images, setImages] = useState([]);
    console.log("in actor page ", movie)


    // useEffect(() => {
    //   getMovieImages(movie.id).then((images) => {
    //     setImages(images);
    //   });
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <>
            <ActorHeader movie={movie} />

            <Grid container spacing={3} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={styles.gridListRoot}>
                        <Avatar sx={styles.profile} alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`} />
                    </div>
                    <br />
                    <br />
                    <Typography variant="h5" component="p">
                        Personal Info
                    </Typography>
                    <Grid container direction="column" spacing={1}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Known For" secondary = {movie.known_for_department} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Known Credits" secondary="71" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Gender" secondary={movie.gender === 1 ? "Female" : movie.gender === 2 ? "Male" : "Unknown"}  />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Birthdate" secondary={movie.birthday} />
                            </ListItem>
                            {/* <ListItem>
                                <ListItemText primary="Day of Death" secondary={movie.deathday} />
                            </ListItem> */}
                            <ListItem>
                                <ListItemText primary="Place of Birth" secondary={movie.place_of_birth} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Also Known As" secondary={movie.also_known_as.join(", ")} />
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
