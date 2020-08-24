import React from "react";
import styled, { keyframes, css } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { createGlobalStyle } from "styled-components";
import { Test } from "./Test";
import { CV } from "./CV/CV";
import { BiHomeSmile } from "react-icons/bi";
import { BaseLink } from "./utils/helpers";
import { hoverGrow } from "./utils/styles";
import { Connect } from "./Connect/Connect";
import { Blog } from "./Blog/Blog";
import { Projects } from "./Projects/Projects";

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
    /* backface-visibility: hidden; */

  }
  html {
  }
`;

function App() {
  return (
    <BrowserRouter>
      <HomeButton />
      <AppContainer>
        <GlobalStyle />
        <Background />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/about" component={Connect} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
}

const HomeButton = () => {
  return (
    <BaseLink to="/">
      <HomeButtonContainer>
        <HomeButtonIcon />
      </HomeButtonContainer>
    </BaseLink>
  );
};

const HomeButtonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 4rem;
  margin: 1rem;
  z-index: 100;
  mix-blend-mode: difference;
  color: #848484;
  ${hoverGrow}
`;

const HomeButtonIcon = styled(BiHomeSmile)`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
