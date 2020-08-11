import React from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "./Catwalk";
import { centerContent } from "./utils/styles";
import GearSVG from "./images/gear-blue.svg";
import ToolboxSVG from "./images/toolbox.svg";
import { AspectRatio } from "./AspectRatio";

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
    transform: rotate(360deg);
  }

`;

const StyledGear = styled.img`
  width: 7%;
  margin: 1rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(2px 0px 12px #00fff3);
  will-change: transform;
  /* animation: ${rotateRight} infinite 4s linear; */
`;

const WebsiteBadgeContainer = styled.div`
  ${centerContent}
  flex-direction: column;
`;

const AashwinText = styled.div`
  font-size: 6rem;
  font-family: "Chelsea Market";
  -webkit-text-stroke: 1px black;
  color: white;
  filter: drop-shadow(2px 4px 6px black);
`;

const WTFText = styled.div`
  font-size: 6rem;
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
      <Orbit1Container>
        <Orbit1>
          <OrbitIconContianer>
            <StyledToolbox src={ToolboxSVG} />
          </OrbitIconContianer>
        </Orbit1>
      </Orbit1Container>
    </ActualHomeContainer>
  );
};

const orbitToolbox = keyframes`
from {

    transform: scale(1.2, 1) rotate(0deg);
}
  
  to {
    transform: scale(1.2, 1) rotate(360deg) ;
  }

`;

const Orbit1IconContianer = styled.div`
  display: flex;
`;

const Orbit1Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 100%;
  height: 100%; */
`;

const Orbit1 = styled.div`
  transform: scale(1.2, 1) rotate(360deg);
  animation: ${orbitToolbox} infinite 12s linear;

  /* transform: translate(-50%, -50%); */
  width: 150%;
  height: 150%;
  width: 400px;
  height: 400px;

  border: 2px #4a437f dashed;
  border-radius: 100%;

  /* width: 33%;
  height: 25%; */
  /* transform: translate3d(-300%, -50%, 0); */
  /* transform-origin: 300% 0%; */
  /*
  will-change: transform;
  backface-visibility: hidden; */
  /* background: green; */
`;
const rotateLeft = keyframes`
  from {
    transform:  rotate(0deg) scale(0.8, 1);
  }
  to {
    transform:rotate(-360deg)  scale(0.8, 1);
  }

`;

const OrbitIconContianer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;

  width: 20%;
  height: 16%;

      justify-content: center;
    transform: translate(-50%, -50%);

  /* animation: ${rotateLeft} infinite 12s linear; */
`;

const StyledToolbox = styled.img`
  object-fit: contain;
  /* object-position: left;
  transform-origin: center center; */
  transform: scale(0.8, 1);
  animation: ${rotateLeft} infinite 12s linear;
`;

const ActualHomeContainer = styled.div`
  position: relative;
`;

const IntroText = styled.div`
  font-size: 6rem;
  -webkit-text-stroke: 1px black;
  color: white;
  font-weight: bold;
`;

const HomeContainer = styled.div`
  ${centerContent}
  height: 100vh;
  width: 100vw;
  /* background-color: #ffe3b9; */
`;
