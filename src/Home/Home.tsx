import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "../utils/Catwalk";
import { centerContent } from "../utils/styles";
import { SizeMe } from "react-sizeme";
import { Orbit } from "./Orbit";
import ToolboxSVG from "../images/toolbox.svg";
import ArmyKnifeSVG from "../images/swiss-army-knife.svg";
import MegaphoneSVG from "../images/megaphone.svg";
import { WebsiteBadge } from "./WebsiteBadge";

export const Home = () => {
  const handleIntroTextFinish = useCallback(() => {
    sessionStorage.setItem("intro-finished", "true");
  }, []);

  return (
    <HomeContainer>
      {sessionStorage.getItem("intro-finished") === "true" ? (
        <ActualHome />
      ) : (
        <Catwalk onFinish={handleIntroTextFinish}>
          <WalkingCat>{""}</WalkingCat>
          <WalkingCat>
            <IntroText>welcome to</IntroText>
          </WalkingCat>
          <WalkingCat>
            <ActualHome />
          </WalkingCat>
        </Catwalk>
      )}
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
                iconSrc={ArmyKnifeSVG}
                orbitSpeed={0.7}
                iconScale={1.3}
                title="CV"
                path="/cv"
              />
              <Orbit
                parentDim={size}
                orbitSize={4}
                iconSrc={MegaphoneSVG}
                orbitSpeed={1}
                iconScale={1.3}
                title="Blog"
                path="/blog"
              />
              <Orbit
                parentDim={size}
                orbitSize={3}
                iconSrc="https://i.imgur.com/FXquf4T.png"
                orbitSpeed={1.1}
                iconScale={1.3}
                title="Contact"
                path="/contact"
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
