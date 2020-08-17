import React from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "../utils/Catwalk";
import { centerContent } from "../utils/styles";
import { SizeMe } from "react-sizeme";
import { Orbit } from "./Orbit";
import ToolboxSVG from "../images/toolbox.svg";
import { WebsiteBadge } from "./WebsiteBadge";

export const Home = () => {
  return (
    <HomeContainer>
      {/* <ActualHome /> */}
      <Catwalk>
        <WalkingCat>{""}</WalkingCat>
        <WalkingCat>
          <IntroText>hi.</IntroText>
        </WalkingCat>
        <WalkingCat>
          <IntroText>welcome to</IntroText>
        </WalkingCat>
        <WalkingCat>
          <ActualHome />
        </WalkingCat>
      </Catwalk>
    </HomeContainer>
  );
};

const ActualHome = () => {
  return (
    <ActualHomeContainer>
      <WebsiteBadge />
      <OrbitsContainer>
        <SizeMe monitorHeight>
          {({ size }) => (
            <>
              <Orbit
                parentDim={size}
                orbitSize={5}
                iconSrc={ToolboxSVG}
                orbitSpeed={0.9}
                title="CV"
                path="/cv"
              />
              <Orbit
                parentDim={size}
                orbitSize={4}
                iconSrc={ToolboxSVG}
                orbitSpeed={1}
                title="Blog"
                path="/blog"
              />
              <Orbit
                parentDim={size}
                orbitSize={3}
                iconSrc={ToolboxSVG}
                orbitSpeed={1.1}
                title="Photography"
                path="/photography"
              />
              <Orbit
                parentDim={size}
                orbitSize={2}
                iconSrc={ToolboxSVG}
                orbitSpeed={1.5}
                title="Projects"
                path="/projects"
              />
            </>
          )}
        </SizeMe>
      </OrbitsContainer>
    </ActualHomeContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const OrbitsContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;
  animation-delay: 2s;
`;

const ActualHomeContainer = styled.div`
  position: relative;
`;

const HomeContainer = styled.div`
  ${centerContent}
  height: 100vh;
  width: 100vw;
`;

const IntroText = styled.div`
  font-size: 6rem;
  -webkit-text-stroke: 1px black;
  color: white;
  font-weight: bold;
`;