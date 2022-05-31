export const ADD_MOVIE = "ADD_MOVIE";
export const SET_MOVIES = "SET_MOVIES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const removeFavourite = (data) => ({
  type: REMOVE_FAVORITE,
  payload: data,
});