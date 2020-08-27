import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "../utils/Catwalk";
import { centerContent } from "../utils/styles";
import { SizeMe } from "react-sizeme";
import { Orbit, OrbitIcon } from "./Orbit";
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
        <>
          <CVOrbit
            orbitShell={4}
            iconSrc={ArmyKnifeSVG}
            orbitSpeed={0.3}
            iconScale={1.3}
            title="CV"
            path="/cv"
          />
          <Orbit
            orbitShell={3}
            iconSrc={MegaphoneSVG}
            orbitSpeed={0.7}
            iconScale={1.3}
            title="Blog"
            path="/blog"
          />
          <Orbit
            orbitShell={2}
            iconSrc="https://i.imgur.com/FXquf4T.png"
            orbitSpeed={0.5}
            iconScale={1.3}
            title="Connect"
            path="/about"
          />
          <Orbit
            orbitShell={1}
            iconSrc={ToolboxSVG}
            orbitSpeed={0.9}
            title="Projects"
            path="/projects"
          />
        </>
      </OrbitsContainer>
    </ActualHomeContainer>
  );
};

const CVOrbit = styled(Orbit)`
  ${OrbitIcon} {
    padding-bottom: 0.8rem;
  }
`;

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
