import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
    
  },
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const SeriesHeader = (props) => {
  console.log("the props ",props)
  const series = props.series;
 
console.log("series header",series)
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
        
      </IconButton>
      <Typography>
         <div>
          
        {series && series.length > 0 && (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        )}
        </div>
      </Typography>

      <Typography variant="h4" component="h3">
  
        {series.name}{"   "}
        <a href={series.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${series.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default SeriesHeader;