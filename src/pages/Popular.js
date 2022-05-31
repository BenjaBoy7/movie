import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../actions";
import { saveMovies, loadMovies, searchMovies } from "../moviesReducer";

import axios from "axios";
import { TMDB_API_KEY } from "../api/key";
// import Loader from "../components/Helper/Loader";
import { API_KEY, baseUrlApi } from "../componets/Helper/constants";
import MovieList from "../componets/MovieList";
import { NavInput } from "../componets/Navigation/NavBar.styles";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1800px;

  @media screen and (max-width: 500px) {
    margin-top: 3em;
  }
`;

const PageText = styled.h1`
  font-size: 1em;
  margin: 0 6em;
  color: #7ca579;

  @media screen and (max-width: 500px) {
    margin: 1em;
  }
`;

const SearchBox = styled.div`
   width: 400px;
   margin: 20px auto;
   display: flex;
  
   @media screen and (max-width: 3000px) {
    flex: 0 0 10%;
  }

  @media screen and (max-width: 2000px) {
    flex: 0 0 13%;
  }

  @media screen and (max-width: 1440px) {
    flex: 1 0 15%;
  }

  @media screen and (max-width: 1025px) {
    flex: 1 0 25%;
  }

  @media screen and (max-width: 640px) {
    flex: 1 0 25%;
  }

  @media screen and (max-width: 361px) {
    flex: 1 0 33%;
  }
`;
const SearchBoxInput = styled.input`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #eee;
  border-radius: 15px

`
export const Section = styled('div')`
flex flex-wrap content-center justify-center w-100 h-100 bg-blue`;

export const Article = styled('div')`
w-25 ma2 h4 items-center justify-center flex flex-column flex-wrap`;

export const Prop = styled('h3')`
f5 f4-ns mb0 white`;

export const Title = styled('h1') `
f4 f3-ns white w-100 tc`;


const PopularMovies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [serchText, setSearchText] = useState(null)

  // const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  function searchMovie(e) {
    dispatch(searchMovies(e.target.value));
  }

  useEffect(() => {
    dispatch(loadMovies());
    console.log("movies", movies)
  });

  return (
    <Wrapper>
      <SearchBox>
         {/* <PageText>Search</PageText> */}
        <SearchBoxInput type="text" class="form-control" onChange={searchMovie} placeholder="Enter Key words" />
      </SearchBox>
      {isError && <div>An error occured, please try again.</div>}
        {/* {movies.length <=0 ? (
          <ReactLoading type={"spin"} style={{top: '50%', left: '50%', width: 100, height: 100, margin: 'auto' }}color="#000" />
        ) : ( */}
        <>
          <MovieList movies={movies} />

        </>
      {/* )} */}
    </Wrapper>
  );
};


export default PopularMovies;
