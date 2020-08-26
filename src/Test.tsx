import React from "react";
import styled, { keyframes } from "styled-components";
import { centerContent } from "./utils/styles";

export const Test = () => {
  return (
    <TestContainer>
      <Cont>Hi</Cont>
      <Cont>Byy</Cont>
      <Cont>Hi</Cont>
      <Cont>Byy</Cont>
    </TestContainer>
  );
};

const Cont = styled.div`
  ${centerContent}
  height: 40vh;
  width: 100%;
  scroll-snap-align: start;
`;

const TestContainer = styled.div`
  /* ${centerContent}
  flex-direction: column; */
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const rotateRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`;
const ToolboxOrbit = styled.div`
  animation: ${rotateRight} infinite 12s linear;
  display: flex;
  width: 300px;
  height: 200px;
  transform: translate3d(-300%, -50%, 0);
  transform-origin: 300% 0%;
  /*
  will-change: transform;
  backface-visibility: hidden; */
  background: green;
`;
