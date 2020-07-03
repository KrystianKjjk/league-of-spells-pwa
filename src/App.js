import React from 'react';

import './App.css';
import Speech from './components/Speech';
import MobileHeader from './components/MobileHeader';
import styled from "styled-components";
import StartScreen from './components/StartScreen';

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
      <StartScreen />
    </Container>
  );
}

export default App;
