import React from 'react'
import { baseURLPoster } from './Helper/constants'

function MovieList(props) {
  return (
    <>
     {props.movies.map((movie, index)=>
       <div className='d-flex justify-content-start m-3'>
         <img src={baseURLPoster + movie.poster_path} alt='movies'></img>
         
       </div>
     )}
    </>
  )
}

export default MovieList