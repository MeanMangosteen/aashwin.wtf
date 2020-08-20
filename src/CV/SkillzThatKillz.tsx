import React from "react";
import styled from "styled-components";
import { centerContent } from "../utils/styles";
import { ProgressBar } from "../ProgressBar";
import { Banner } from "./experience/styles";

export const SkillzThatKillz = () => {
  return (
    <SkillsThatKillzContainer>
      <PreambleContainer>
        <PreambleText>
          My arsenal of weapons. Below is a snapshot of where I stand currently
          with my skills. At times I feel it's arbitrary. They're simply tools
          to solve problems and incarnate visions.
        </PreambleText>
        <PreambleText>
          Depending on the battlefield I'm on, I will use my current strengths,
          sharpen others, or learn complete new ones. Whatever is required to
          come out victorious.
        </PreambleText>
      </PreambleContainer>
      <SkillBarsContainer>
        <SkillBars>
          <FullStackSkillz>
            <FullstackSkillzTitle>Fullstack</FullstackSkillzTitle>
            <SkillBar title="React/Javascript/Typescript" percentage={95} />
            <SkillBar title="HTML/CSS" percentage={90} />
            <SkillBar title="Node.js/Express" percentage={70} />
            <SkillBar title="PostgreSQL" percentage={60} />
          </FullStackSkillz>
          <OtherSkillz>
            <SkillBar title="Python" percentage={60} />
            <SkillBar title="C/C++" percentage={55} />
            <SkillBar title="Java" percentage={40} />
            <SkillBar title="Misc" percentage={30} />
          </OtherSkillz>
        </SkillBars>
      </SkillBarsContainer>
    </SkillsThatKillzContainer>
  );
};

const SkillsThatKillzContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: no-wrap;
  /* background: #3e3e3e; */
  background: #434d65;

  height: 100%;
  width: 100%;
  font-family: "Ubuntu";
`;

const PreambleContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin: 2rem;
`;
const PreambleText = styled.div`
  ${centerContent}
  max-width: 1200px;
  color: white;
  font-size: 1.4rem;
  margin: 1rem;
`;
const SkillBarsContainer = styled.div`
  /* margin: 0 auto; */
  ${centerContent}
  flex-grow: 1;
`;

const SkillBars = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    padding: 2rem;
    margin: 1rem;
  }
`;

const StyledProgressBar = styled(ProgressBar)`
  position: absolute;
  height: 50%;
  width: 100%;
  /* height: 100px;
  width: 400px; */
`;

// ======================================
const SkillBar = ({
  title,
  percentage,
}: {
  title: string;
  percentage: number;
}) => {
  return (
    <SkillBarContainer>
      <SkillBarTitle>{title}</SkillBarTitle>
      <StyledProgressBar
        total={100}
        progress={percentage}
        className="skill-bar"
      />
    </SkillBarContainer>
  );
};

const SkillBarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
  height: 200px;
  width: 500px;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
`;

const SkillBarTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  top: -5%;
  left: 0;
  color: white;
`;

const FullStackSkillz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  border: 9px solid white;

  ${SkillBarContainer} {
    width: 100%;
    /* flex-basis: 0;
    flex-grow: 20%; */
    height: 100px;
    margin: 1rem;
  }
  position: relative;
`;

const FullstackSkillzTitle = styled.div`
  position: absolute;
  top: -1rem;
  left: 0;
  color: white;
  font-size: 2rem;
  transform: translateY(-100%);
`;

const OtherSkillz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;

  ${SkillBarContainer} {
    width: 100%;
    height: 100px;
    margin: 1rem;
  }
`;
