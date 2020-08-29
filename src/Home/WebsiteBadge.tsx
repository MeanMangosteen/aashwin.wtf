import React from "react";
import GearSVG from "../images/gear-blue.svg";
import styled, { keyframes } from "styled-components";
import { centerContent } from "../utils/styles";
export const WebsiteBadge = () => {
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

const rotateLeft = keyframes`
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
  animation: ${rotateLeft} infinite 4s linear;
`;

const WebsiteBadgeContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  font-size: 3vw;

  @media screen and (max-width: 1500px) {
    font-size: 5vw;
  }

  @media screen and (max-width: 800px) {
    font-size: 6vw;
  }

  @media screen and (max-width: 750px) {
    font-size: 9vw;
  }
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
