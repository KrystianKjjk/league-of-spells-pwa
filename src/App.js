import React from 'react';

import MobileHeader from './components/MobileHeader';
import styled from "styled-components";
import Home from './Pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChooseChampions from './Pages/ChooseChampions';
import SpellsTimer from './Pages/SpellsTimer/SpellsTimer';
import Links from './utilities/Links';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 95vh;
  overflow-y: hidden;
`;

function App() {
  // const header = useWidth([500], [<MobileHeader />, <BrowserHeader />]).resultValue;

  return (
    <BrowserRouter >
      {/* {header} */}
      <MobileHeader style={{ height: '5vh', minHeight: '35px' }} />
      <Container >
        <Switch>
          <Route exact path={Links.ChooseChampions}>
            <ChooseChampions />
          </Route>
          <Route exact path={Links.SpellsTimer}>
            <SpellsTimer />
          </Route>
          <Route exact path={Links.Home} >
            <Home />
          </Route>
          <Route exact path={Links.Default} >
            <Home />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;