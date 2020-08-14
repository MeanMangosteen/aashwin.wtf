import React from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { createGlobalStyle } from "styled-components";
import { Test } from "./Test";
import { CV } from "./CV/CV";

const Explode = keyframes`
from {
  transform: scale(0);
}

to {transform: scale(5)}
`;
const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: radial-gradient(
    circle closest-side,
    #ffe3b9 0%,
    #ffe3b9 100%,
    white 100%
  );
  animation: ${Explode} 1s ease-in forwards;
  will-change: transform;
`;

const GlobalStyle = createGlobalStyle`
  body {
    backface-visibility: hidden;

  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Background />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
