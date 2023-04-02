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

            <Grid container spacing={2} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={styles.gridListRoot}>
                        <Avatar sx={styles.profile} alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`} />
                    </div>
                    <br></br>
                </Grid>



                <Grid item xs={9}>
                    {children}

                </Grid>
                <Grid item xs={5}  >
                    <Typography variant="h5" component="p">
                        Personal Info
                    </Typography>

                </Grid>
                {/* <Grid item xs={4}>

                    <Typography variant="body1">Personal Info</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Known For</Typography>
                    <Typography variant="body2">Acting</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Known Credits</Typography>
                    <Typography variant="body2">71</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Gender</Typography>
                    <Typography variant="body2">Female</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Birthdate</Typography>
                    <Typography variant="body2">1968-08-17</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Day of Death</Typography>
                    <Typography variant="body2">2021-04-16 (52 years old)</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Place of Birth</Typography>
                    <Typography variant="body2">London, England, UK</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">Also Known As</Typography>
                    <Typography variant="body2">Хелен Маккрори</Typography>
                </Grid> */}


            </Grid>
        </>
    );
};

export default TemplateMoviePage;
