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
import { saveMovies, loadMovies } from "../moviesReducer";

import axios from "axios";
import { TMDB_API_KEY } from "../api/key";
// import Loader from "../components/Helper/Loader";
import { API_KEY, baseUrlApi } from "../componets/Helper/constants";
import MovieList from "../componets/MovieList";
import { NavInput } from "../componets/Navigation/NavBar.styles";

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
 
`;
const PopularMovies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  // const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // const url = `${baseUrlApi}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  // const apiurl = "https://api.themoviedb.org/3/discover/movie?api_key=79e1cf6f245dbb7517eb72c3742a5426&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"

  // const fetchMovies = async () => {
  //   setIsLoading(true)
  //   setIsError(false)

  //   await axios.get(url).then(res=>(
  //     setIsLoading(false),
  //     setMovies(res.data.results)
  //   )).catch(
  //     setIsError(true)
  //   );
  // }

  // useEffect(() => {
  //   fetchMovies();
  // }, [url]);




  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <Wrapper>
      <PageText>Search</PageText>
      <div class="col-sm-4">
         <label for="exampleInputEmail1">Email address</label>
         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
      {isError && <div>An error occured, please try again.</div>}
      {isLoading ? (
        // <Loader />
        null
      ) : (
        <>
          <MovieList movies={movies} />

        </>
      )}
    </Wrapper>
  );
};


export default PopularMovies;
