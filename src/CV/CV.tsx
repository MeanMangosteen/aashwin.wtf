import React from "react";
import styled from "styled-components";
import { Education } from "./education/Education";
import { ImARealBoy } from "./ImARealBoy";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";

export const CV = () => {
  return (
    <CVContainer>
      <Education />
      <Experience />
      <Skills />
      <ImARealBoy />
    </CVContainer>
  );
};

const CVContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;

  > * {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    height: 100vh;
  }
`;
