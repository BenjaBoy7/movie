import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PopularMovies from './pages/Popular';
import FavouriteList from './componets/FavouritesList';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Navbar from './componets/Navigation/Navigation';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf5zpeIH43KoC2vYA0TMxo-47VbAIKZV8",
  authDomain: "movieapi-7ae42.firebaseapp.com",
  projectId: "movieapi-7ae42",
  storageBucket: "movieapi-7ae42.appspot.com",
  messagingSenderId: "59669140207",
  appId: "1:59669140207:web:6cd79888087e019cb1811a",
  measurementId: "G-N76LYTXLGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const App =() => {
  // const [movies, setMovies] = useState([sampleData])
  // console.log("movies list", movies[0].results)

  return (
   <div className='container-flud movie-app'>
     <Router>
   	 <div className='movie-header '>
         <Navbar />
		 </div>
     <div className="row movie-body">
            <Routes>
              <Route exact path="/" element={<PopularMovies/>}/>
              <Route exact path="/favourites" element={<FavouriteList/>}/>
            </Routes>
     </div>  
   </Router> 
   </div>
  );
}

export default App;


