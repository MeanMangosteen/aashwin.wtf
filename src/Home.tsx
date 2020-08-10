import React from "react";
import styled, { keyframes } from "styled-components";
import { Catwalk, WalkingCat } from "./Catwalk";
import { centerContent } from "./utils/styles";
import { ReactComponent as GearSVG } from "./images/gear-blue.svg";

export const Home = () => {
  return (
    <HomeContainer>
      <Catwalk>
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
      </Catwalk>
    </HomeContainer>
  );
};

const WebsiteBadge = () => {
  return (
    <WebsiteBadgeContainer>
      <AashwinText>aashwin</AashwinText>
      <StyledGear />
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

const StyledGear = styled(GearSVG)`
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
  return <ActualHomeContainer></ActualHomeContainer>;
};

const ActualHomeContainer = styled.div``;

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
