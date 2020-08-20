import React from "react";
import styled from "styled-components";
import { centerContent } from "../../utils/styles";

export const ExperienceInfo = ({
  position,
  location,
  time,
  className = "", }: {
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
  ${centerContent}
  flex-direction: column;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Ubuntu";
`;
const Position = styled.div`
  font-size: 3rem;
  color: #3a3a3a;
  margin: 0.5rem 0rem;
`;
const Time = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  color: #3a3a3a;
  margin: 0.5rem 0rem;
`;
const Location = styled.div`
  font-size: 1rem;
  font-style: italic;
  color: #3a3a3a;
`;
