import React from "react";

const MovieReview =  ({ review }) => {
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.review} </p>
    </>
  );
};
export default MovieReview
