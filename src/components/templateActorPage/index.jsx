import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Avatar from "@mui/material/Avatar";
import ActorHeader from "../headerActor"
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

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div sx={styles.gridListRoot}>
                        <Avatar sx={styles.profile} alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500${movie.profile_path}`} />
                    </div>
                </Grid>


                <Grid item xs={9}>
                    {children}

                </Grid>

            </Grid>
        </>
    );
};

export default TemplateMoviePage;
