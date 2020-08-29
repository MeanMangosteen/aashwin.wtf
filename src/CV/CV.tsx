import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Education } from "./education/Education";
import { ImARealBoy } from "./ImARealBoy";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";

export const CV = () => {
  const [stage, setStage] = useState<string>("education");
  const xpRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const realBoyRef = useRef<HTMLDivElement>(null);
  return (
    <CVContainer>
      <Education
        onFinish={
          () => {}
          // xpRef.current?.scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          //   inline: "start",
          // })
        }
      />
      <ExperienceWrapper ref={xpRef}>
        <Experience
          onFinish={
            () => {}
            // xpRef.current?.scrollIntoView({
            //   behavior: "smooth",
            //   block: "start",
            //   inline: "start",
            // })
          }
        />
      </ExperienceWrapper>
      <SkillsWrapper ref={skillsRef}>
        <Skills
          onFinish={
            () => {}
            // xpRef.current?.scrollIntoView({
            //   behavior: "smooth",
            //   block: "start",
            //   inline: "start",
            // })
          }
        />
      </SkillsWrapper>
      <ImARealBoyWrapper ref={realBoyRef}>
        <ImARealBoy onFinish={() => {}} />
      </ImARealBoyWrapper>
    </CVContainer>
  );
};

const ExperienceWrapper = styled.div``;
const SkillsWrapper = styled.div``;
const ImARealBoyWrapper = styled.div``;
const CVContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: 95vh;
  }
`;
