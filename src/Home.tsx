import React from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "./Catwalk";
import { centerContent } from "./utils/styles";
import GearSVG from "./images/gear-blue.svg";
import { AspectRatio } from "./AspectRatio";
import sizeMe, { SizeMe } from "react-sizeme";
import { Orbit } from "./Orbit";
import ToolboxSVG from "./images/toolbox.svg";

export const Home = () => {
  return (
    <HomeContainer>
      <ActualHome />
      {/* <Catwalk>
        <WalkingCat>{""}</WalkingCat>
        <WalkingCat>
          <IntroText>hi.</IntroText>
        </WalkingCat>
        <WalkingCat>
          <IntroText>welcome to</IntroText>
        </WalkingCat>
        <WalkingCat>
          <WebsiteBadge />
        </WalkingCat>
      </Catwalk> */}
    </HomeContainer>
  );
};

const WebsiteBadge = () => {
  return (
    <WebsiteBadgeContainer>
      <AashwinText>aashwin</AashwinText>
      <StyledGear src={GearSVG} />
      <WTFText>
        <div>w</div>
        <div>t</div>
        <div>f</div>
      </WTFText>
    </WebsiteBadgeContainer>
  );
};

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }

`;

const StyledGear = styled.img`
  width: 7%;
  margin: 1rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(2px 0px 12px #00fff3);
  will-change: transform;
  animation: ${rotateRight} infinite 4s linear;
`;

const WebsiteBadgeContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  font-size: 3rem;
`;

const AashwinText = styled.div`
  /* font-size: 4rem; */
  font-family: "Chelsea Market";
  -webkit-text-stroke: 1px black;
  color: white;
  filter: drop-shadow(2px 4px 6px black);
`;

const WTFText = styled.div`
  /* font-size: 4rem; */
  font-family: "Luckiest Guy";
  /* letter-spacing: -1rem; */
  -webkit-text-stroke: 2px #ffa1a1;
  div:nth-child(1) {
    display: inline-block;
    color: rgba(171, 23, 149, 0.75);
    transform: rotate(-8deg) translateX(14px);
  }
  div:nth-child(2) {
    display: inline-block;
    color: #167cfbbf;
    transform: rotate(7deg);
  }
  div:nth-child(3) {
    display: inline-block;
    color: #37d86ebf;
    transform: rotate(-11deg);
  }
`;

const ActualHome = () => {
  return (
    <ActualHomeContainer>
      <WebsiteBadge />
      <SizeMe monitorHeight>
        {({ size }) => (
          <>
            <Orbit
              parentDim={size}
              orbitSize={2}
              iconSrc={ToolboxSVG}
              orbitSpeed={1.5}
            />
            <Orbit
              parentDim={size}
              orbitSize={3}
              iconSrc={ToolboxSVG}
              orbitSpeed={1.1}
            />

            <Orbit
              parentDim={size}
              orbitSize={4}
              iconSrc={ToolboxSVG}
              orbitSpeed={2.5}
            />

            <Orbit
              parentDim={size}
              orbitSize={5}
              iconSrc={ToolboxSVG}
              orbitSpeed={0.9}
            />
          </>
        )}
      </SizeMe>
    </ActualHomeContainer>
  );
};

const ActualHomeContainer = styled.div`
  position: relative;
`;

const HomeContainer = styled.div`
  ${centerContent}
  height: 100vh;
  width: 100vw;
`;
