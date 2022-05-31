import React from "react";
import styled from "styled-components";

import MovieCard from "./MovieCard";
import AddFavourite from "./AddFavourite";

const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3em 3.5em;

  @media screen and (max-width: 3000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 2000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 1440px) {
    padding: 1.5em;
  }

  @media screen and (max-width: 1025px) {
    padding: 1em 0.65em;
  }

  @media screen and (max-width: 640px) {
    padding: 0.35em;
  }

  @media screen and (max-width: 361px) {
    padding: 0.25em;
  }
`;

function MovieList(props) {

//   const renderMovieCards = props.map((movie) => (
//     <MovieCard key={movie.id} movie={movie}></MovieCard>
//   ));

  const renderMovieCards =
   <>
    {props.movies.map((movie, index)=>
        <MovieCard key={movie.id} movie={movie} favouriteComponent={AddFavourite}></MovieCard>
    )}
   </>

  return <MovieContainer>{renderMovieCards}</MovieContainer>;
};


export default MovieList;
