import React from 'react';

import './App.css';
import Speech from './components/Speech';
import MobileHeader from './components/MobileHeader';
import styled from "styled-components";
import Home from './Pages/Home';

const Container = styled.div`
  /* display: flex; */
  width: 100wh;
  height: 100vh;
`;

function App() {
  return (
    <Container >
      <MobileHeader />
      {/* <Speech /> */}
      <Home />
    </Container>
  );
}

export default App;


// const initialMovies = {
//   listName: "Favourite",
//   list: [
//     "Rambo", "Matrix", "Star wars"
//   ]
// };
// const initialActors = {
//   listName: "Best",
//   list: [
//     "Tom Hanks", "Julia Roberts", "Jenifer Lopez"
//   ]
// }
// const movies = (state = initialMovies, action) => {
//   switch (action.type) {
//     case 'ADD_MOVIE':
//       return {
//         ...state, list: [...state.list, action.item]
//       }
//     case 'RESET_MOVIE':
//       return {
//         ...state, list: []
//       }
//     default:
//       return state;
//   }
// }
// const actors = (state = initialActors, action) => {
//   switch (action.type) {
//     case 'ADD_ACTOR':
//       return {
//         ...state, list: [...state.list, action.item]
//       }
//     case 'RESET_ACTORS':
//       return {
//         ...state, list: []
//       }
//     default:
//       return state;
//   }
// }


// const allReduces = combineReducers({ movies, actors });

// window.store = store;

// //store.dispatch({ type: "ADD_ACTOR", item: "Cezary Pazura" });

// const addActor = item => ({ type: "ADD_ACTOR", item });
// const resetActors = () => ({ type: "RESET_ACTORS" })
// const actorsActions = bindActionCreators({ add: addActor, reset: resetActors }, store.dispatch);

// actorsActions.add("Jerzy nie pije");