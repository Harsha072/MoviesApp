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

const Header = ({ title, setPage, page, isFetching, isPreviousData,movies } ) => {
  console.log("header new component",setPage)
  console.log("header component",isPreviousData)

 
console.log("the movie ",movies)
const handleNextPage = () => {
  setPage((prevPage) => prevPage + 1);
};
const handlePrevPage = () => {
  setPage((prevPage) => prevPage - 1);
};

  return (
    
    <Paper component="div" sx={styles.root}>
      <IconButton
        aria-label="go back"
        onClick={handlePrevPage}
        disabled={page === 1}
        color="primary" fontSize="large"
      >
        <ArrowBackIcon  />
      </IconButton>

      <Typography variant="h4" component="h3">

        {title}
      </Typography>
      <IconButton
        aria-label="go forward"
        onClick={handleNextPage}
        disabled={!movies}
         color="primary" fontSize="large"
      >
        <ArrowForwardIcon   />
      </IconButton>
    </Paper>
  );
};

export default Header;