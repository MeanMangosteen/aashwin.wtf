import React from "react";
import styled from "styled-components";
import { Mailcraft } from "./mailcraft/Mailcraft";

export const Projects = () => {
  return (
    <ProjectsContainer>
      <Mailcraft />
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
