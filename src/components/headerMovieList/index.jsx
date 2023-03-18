import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header = (props ) => {
  console.log("header component")
  const title = props.title
  const movie = JSON.parse(localStorage.getItem("favourites")); 
console.log("the movie ",movie)
  return (
    
    <Paper component="div" sx={styles.root}>
      <IconButton
        aria-label="go back"
      >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">

        {title}
      </Typography>
      <IconButton
        aria-label="go forward"
      >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;