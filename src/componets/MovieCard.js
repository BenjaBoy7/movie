import React, { useContext } from "react";

import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// import { navigate } from "@reach/router";

// import { CTX } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../actions";
import { saveMovie, loadMovie } from "../moviesReducer";

import AltPoster from "./posterplaceholder.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStopwatch } from "@fortawesome/free-solid-svg-icons";

// import RemoveFavoriteButton from "../Helper/RemoveFavoriteButton";

const CardContainer = styled.div`
  position: relative;
  flex: 0 0 9%;
  display: flex;
  justify-content: space-around;
  margin: 1.55vw 1vw;
  border-radius: 10px 10px 0 0;
  transition: transform;
  transition-duration: 0.25s;
  color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    cursor: pointer;
    transform: scale(1.08);
    // background: rgba(0, 0, 0, 0.8);
  }

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
    border-radius: 0px;

  }

  @media screen and (max-width: 361px) {
    flex: 1 0 33%;
    border-radius: 0px;

  }
`;

const StyledImg = styled.img`
vertical-align: middle;
border-style: none;
  width: 100%;
  height: 87%;
  border-radius: 10px 10px 0 0;
  :hover {
    cursor: pointer;
    // transform: scale(1.08);
    background: rgba(0, 0, 0, 0.8);
  }
`;

const StyledRuntime = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

// const RuntimeIcon = styled(FontAwesomeIcon).attrs({ icon: faStopwatch })`
//   font-size: 1em;
//   margin: 0 0.25rem 0 0;
// `;

const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;

const BottomWrapper = styled.div`
// border-radius: 16px;
position: absolute;
// background: rgba(0, 0, 0, 0.8);
background : #f3f5f8;
color: #000;
width: 100%;
transition: 0.5s ease;
opacity: 1;
bottom: 0;
font-size: 20px;
// padding: 20px;
// text-align: right;
// right: 0;
// align-items: center!important;
// justify-content: center!important;
display: flex!important;
@media screen and (max-width: 640px) {
  // flex: 1 0 25%;
  // padding: 2px;
  // margin: 1px;
  font-size: 15px;
  background: transparent;
}
`;


const AddFavouriteStyled = styled.div`
// border-radius: 16px;
position: absolute;
// background: rgba(0, 0, 0, 0.8);
color: #000;
width: 20%;
transition: 0.5s ease;
opacity: 1;
bottom: 0;
font-size: 15px;
right: 0;
display: inline-block;
@media screen and (max-width: 640px) {
  // flex: 1 0 25%;
  // padding: 2px;
  // margin: 1px;
  font-size: 15px;
  background: transparent
}
`;

const MovieTitle = styled.div`
position: absolute;
display: inline-block;
width: 80%;
bottom: 0;
left: 0;
font-size: 18px;
padding: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
@media screen and (max-width: 640px) {
  // flex: 1 0 25%;
   padding: 0px 5px;
  // margin: 1px;
  font-size: 15px;
}
`
const WatchListIcon = styled.button`
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #dc3545;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
@media screen and (max-width: 640px) {
  // flex: 1 0 25%;
  padding: 2px;
  margin: 1px;
  font-size: 15px;
}
`;
const WatchListAdded = styled.button`
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
@media screen and (max-width: 640px) {
  // flex: 1 0 25%;
  padding: 2px;
  margin: 1px;
  font-size: 15px;
}
`;

// const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
//   color: gold;
//   margin: 0 0.25rem 0 0;
// `;

const MovieCard = props => {
  const dispatch = useDispatch();
  const { favourite } = useSelector((state) => state);

  //   const { dispatch } = useContext(CTX);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const { poster_path, title, vote_average, id, original_title, overview } = props.movie;
  //   const { runtime } = props.movie.details;

  const imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;

  function handleMovieClick() {
    // dispatch({ type: "MOVIE_CLICKED", payload: props.movie });
    // navigate(`/fullmoviepage/`, { myMovie: props.movie });
  }

  const convertRuntime = num => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  };
  const AddFavouriteComp = props.favouriteComponent;

  //   const convertedRuntime = convertRuntime(runtime);

  //   const showRuntime = () => {
  //     if (!isMobile && runtime !== 0) {
  //       return (
  //         <StyledRuntime>
  //           {/* <RuntimeIcon /> */}
  //           {/* {convertedRuntime} */}
  //         </StyledRuntime>
  //       );
  //     }
  //   };

  const onAddMovie = (movie) => {
    console.log(movie)
    dispatch(addMovie(movie));
  };

  const showRating = () => {
    if (!isMobile && vote_average !== 0) {
      return (
        <StyledRating>
          {/* <RatingIcon /> */}
          {vote_average}
        </StyledRating>
      );
    }
  };

  let isShowAdd = true;

  favourite.forEach((f) => {
    if (f.id === id) {
      isShowAdd = false;
    }
  })

  return (
    <>
      <CardContainer>
        <StyledImg
          src={poster_path ? imageURL : AltPoster}
          onClick={handleMovieClick}
          alt={`${title} poster`}
        />
        {/* {showRuntime()} */}
        {showRating()}
        {/* {props.removeMode && <RemoveFavoriteButton movie={props.movie} />} */}
        <BottomWrapper>
          <MovieTitle>{original_title}</MovieTitle>
          <AddFavouriteStyled>
            {isShowAdd ? <WatchListAdded onClick={() => onAddMovie(props.movie)} ><i class="fa fa-heart"></i></WatchListAdded> :
              <WatchListIcon><i class="fa fa-heart"></i></WatchListIcon>}
          </AddFavouriteStyled>
        </BottomWrapper>

      </CardContainer>
    </>
  );
};

export default MovieCard;
