

import React from "react";
import ActorsListPageTemplate from '../components/templateActorListPage'
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { getMovies,getActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import {nameFilter,genreFilter} from '../components/actorFilterUI';
import ActorFilterUI from "../components/actorFilterUI";
const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const PopularActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery("actors", getActors);
     const { filterValues, setFilterValues, filterFunction } = useFiltering( [], [nameFiltering,genreFiltering] );
     console.log("filter values ",filterValues)
     console.log("filter function ",filterFunction)
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    const changeFilterValues = (type, value) => {
      console.log("change filter value ",type)
      const changedFilter = { name: type, value: value };
      const updatedFilterSet =
        type === "title"
          ? [changedFilter, filterValues[1]]
          : [filterValues[0], changedFilter];
          console.log("filter set ::: ",updatedFilterSet)
      setFilterValues(updatedFilterSet);
    };
  
    const movies = data ? data.results : [];
    const displayedMovies = filterFunction(movies);
  console.log("end",displayedMovies)
  
    return (
      <>
         <ActorsListPageTemplate
          title="Popular Actors"
          movies={displayedMovies}
          action={(movie) => {
            return <AddToFavouritesIcon movie={movie} />
          }}
        />
        <ActorFilterUI
          onFilterValuesChange={changeFilterValues}
          nameFilter={filterValues[0].value}
          genreFilter={filterValues[1].value}
        />
      </>
    );
  };
  export default PopularActorsPage;