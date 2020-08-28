import React from "react";
import styled from "styled-components";
import { centerContent } from "../../utils/styles";

export const ExperienceInfo = ({
  position,
  location,
  time,
  className = "",
}: {
  position: string;
  location: string;
  time: string;
  className?: string;
}) => {
  return (
    <ExperienceInfoContainer className={className}>
      <Position>{position}</Position>
      <Time>{time}</Time>
      <Location>{location}</Location>
    </ExperienceInfoContainer>
  );
};
const ExperienceInfoContainer = styled.div`
  /* ${centerContent}
  flex-direction: column;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Ubuntu"; */
  ${centerContent}
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: "Ubuntu";
  text-align: center;

  font-size: 1rem;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Position = styled.div`
  font-size: 3em;
  color: #3a3a3a;
  margin: 0.5em 0em;
  @media screen and (max-width: 1050px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;
const Time = styled.div`
  font-size: 1.5em;
  font-style: italic;
  color: #3a3a3a;
  margin: 0.5em 0em;
`;
const Location = styled.div`
  font-size: 1.2em;
  font-style: italic;
  color: #3a3a3a;
`;
