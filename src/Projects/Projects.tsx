import React from "react";
import styled from "styled-components";
import { Mailcraft } from "./mailcraft/Mailcraft";
import { Banner, TitleText } from "../CV/styles";
import { centerContent } from "../utils/styles";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Mailcraft />
      <WatchThisSpaceBanner>
        <TextContainer>
          <BigText>Watch This Space!</BigText>
          <LittleText>Lots more coming in the future</LittleText>
        </TextContainer>
      </WatchThisSpaceBanner>
    </ProjectsContainer>
  );
};

const WatchThisSpaceBanner = styled(Banner)`
  background: #ffc383;
`;

const TextContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  font-family: "Ubuntu";
`;
const BigText = styled(TitleText)`
  padding: 3rem;
`;
const LittleText = styled.div`
  font-size: 2rem;
  color: #ba4f4f;
`;

const ProjectsContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
    height: 100vh;
  }
`;
