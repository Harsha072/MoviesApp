import React, { useContext, useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function MovieReviews({ movie }) {
  const [reviews, setReviews] = useState([]);
  const { myReviews:review}=useContext(MoviesContext)
  console.log(movie.id)
  console.log(review[movie.id].author)
  console.log("api ", reviews)
  useEffect(() => {
    getMovieReviews(movie.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("got myReviews", review)
  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow key={movie.id}>
              <TableCell component="th" scope="row">
                {review[movie.id].author}
              </TableCell>
              <TableCell >{excerpt(review[movie.id].review)}</TableCell>
              <TableCell >
                            <Link
                  to={`/reviews/${review[movie.id]}`}
                  state={{
                      review: review[movie.id],
                      movie: movie,
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}
