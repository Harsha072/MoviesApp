import React, { useState } from "react";
import FilterCard from "../filterActorsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

export const nameFilter = function (actors, value) {
  console.log(actors)
 return actors.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (actors, value) {

  
    return genreFilter2(actors, value); 
  
};
export const genreFilter2 = function (actor, value) {
  console.log("actor ",actor)
  const genreId = Number(value);
  console.log("value ",value)
  const hasGenreMovie = actor.known_for.find(movie => {
    if (genreId === 0 || movie.genre_ids.includes(genreId)) {
      return true;
    }
  });
  return hasGenreMovie;
};
const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

const ActorFilterUI = ({ onFilterValuesChange, nameFilter,genreFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
console.log("genre flter ")
  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          nameFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};
export default ActorFilterUI