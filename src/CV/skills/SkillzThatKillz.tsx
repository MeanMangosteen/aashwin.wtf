import React from "react";
import styled from "styled-components";
import { centerContent } from "../../utils/styles";
import { ProgressBar } from "../../ProgressBar";

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
          sharpen others, or learn complete new ones. Whatever the situation
          requires.
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
  /* background: #434d65; */


  /* height: 100%;
  width: 100%; */
  font-family: "Ubuntu";
  min-height: 100vh;
  max-width: 100vw;
  @media screen and (min-width: 1000px) {
    max-height: 100vh;
    max-width: 1100px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`;

const PreambleContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin: 2rem;
`;
const PreambleText = styled.div`
  ${centerContent}
  margin: 0 auto;
  max-width: 1200px;
  color: white;
  font-size: 1.4rem;
  margin: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
  @media screen and (min-height: 1100px) {
    font-size: 2rem;
  }
`;
const SkillBarsContainer = styled.div`
  /* margin: 0 auto; */
  ${centerContent}
  flex-grow: 1;
`;

const SkillBars = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    padding: 2rem;
    margin: 1rem;
    @media screen and (max-width: 500px) {
      padding: 0.8rem;
      margin: 0.8rem;
    }
  }

  font-size: 1rem;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: stretch;
    padding: 3rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: normal;
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
  font-size: 1.2em;
  position: absolute;
  top: 0%;
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

  @media screen and (max-width: 500px) {
    border: 5px solid white;
  }

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
  font-size: 2em;
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
