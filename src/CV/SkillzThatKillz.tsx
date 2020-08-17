import React from "react";
import styled from "styled-components";
import { centerContent } from "../utils/styles";
import { ProgressBar } from "../ProgressBar";

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
      <SkillBars>
        <FullStackSkillz>
          <SkillBar title="React/Javascript" percentage={50} />
          <SkillBar title="React/Javascript" percentage={50} />
          <SkillBar title="React/Javascript" percentage={50} />
          <SkillBar title="React/Javascript" percentage={50} />
          {/* <StyledProgressBar total={100} progress={60} className="skill-bar" /> */}
        </FullStackSkillz>
      </SkillBars>
    </SkillsThatKillzContainer>
  );
};

const SkillsThatKillzContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: no-wrap;
  background: #3e3e3e;
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
const SkillBars = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const StyledProgressBar = styled(ProgressBar)`
  position: absolute;
  /* height: 100px;
  width: 400px; */
`;

const FullStackSkillz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${StyledProgressBar} {
    width: 100%;
    flex-basis: 0;
    flex-grow: 20%;
  }
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

const SkillBarTitle = styled.div``;
