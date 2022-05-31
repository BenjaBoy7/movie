import { ADD_MOVIE, setMovies, SET_MOVIES, REMOVE_FAVORITE } from "./actions"
import { API_KEY } from "./componets/Helper/constants"
import ReactLoading from 'react-loading';
import axios from "axios";

const initialState = {
  movies: [],
  favourite: []
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return { ...state, favourite: [...state.favourite, action.payload] }
    }
    case SET_MOVIES: {
      return { ...state, movies: action.payload }
    }
    case REMOVE_FAVORITE: {
      console.log(" action.payload", action.payload)
      let data = action.payload;
      let id = data.id
      console.log("id", id)
      let newFavList = data.data.filter((f) => f.id !== id);
      return { ...state, favourite: newFavList }
    }
    default:
      return state
  }
}

export const saveMovies = () => async (dispatch, getState) => {
  // const notes = getState().movies;
  // await fetch("http://localhost:4000/notes", {
  //   method: "POST",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(notes)
  // })
  // alert("Success")



}

export const loadMovies = () => async (dispatch, getState) => {
  // const movies = await fetch("").then(res => res.json())
  // console.log(movies)
  await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79e1cf6f245dbb7517eb72c3742a5426&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22").then(res =>
     dispatch(setMovies(res.movies.results)),
    )

}
export const searchMovies = (query) => async (dispatch, getState) => {
  const url = query == null || query == "" ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1` : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const movies = await fetch(url).then(res => res.json())
  dispatch(setMovies(movies.results))
  console.log(url)

  
} 