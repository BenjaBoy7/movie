import { ADD_MOVIE, setMovies, SET_MOVIES, REMOVE_FAVORITE } from "./actions"

const initialState = {
    movies: [],
    favourite: []
  }
  
  export const moviesReducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_MOVIE: {
        return {...state, favourite: [...state.favourite, action.payload]}
      }
      case SET_MOVIES: {
        return {...state, movies: action.payload}
      }
      case REMOVE_FAVORITE: {
        return {...state, favourite: [...state.favourite, action.payload]}
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
    const movies = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=79e1cf6f245dbb7517eb72c3742a5426&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22").then(res => res.json())
    dispatch(setMovies(movies.results))
    console.log(movies)
  } 