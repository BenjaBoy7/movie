import React, {useEffect} from "react";
import styled from "styled-components";
import FavouriteCard from "./FavouriteCard";
import { useSelector, useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

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

function FavouriteList(props) {
    const favourite = useSelector((state) => state.favourite);
    console.log(favourite)

  const renderMovieCards =
   <>
    {favourite.map((favourite, index)=>
        <FavouriteCard key={favourite.id} favourite={favourite}></FavouriteCard>     
    )}
   </>

  return <MovieContainer>{renderMovieCards}</MovieContainer>
  
  
};


export default FavouriteList;
