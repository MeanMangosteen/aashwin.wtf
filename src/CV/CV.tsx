import React from "react";
import styled, { css } from "styled-components";
import { centerContent } from "../utils/styles";
import { Carousel, CarouselItem } from "../utils/Carousel";

export const CV = () => {
  return (
    <CVContainer>
      <EducationBanner>
        <TitleText>Education</TitleText>
      </EducationBanner>
      <UNSWBanner>
        <Carousel running={false}>
          <CarouselItem>
            <TitleText>Education</TitleText>
          </CarouselItem>
          <CarouselItem>
            <TitleText>UNSW</TitleText>
          </CarouselItem>
        </Carousel>
      </UNSWBanner>
      <ExperienceBanner>
        <TitleText>Experience</TitleText>
      </ExperienceBanner>
      <SkillsBanner>
        <TitleText>Skills</TitleText>
      </SkillsBanner>
    </CVContainer>
  );
};

const sickFadeBackground = (
  color: string,
  iHaveSetRelativePosition = false
) => {
  if (!iHaveSetRelativePosition)
    throw Error(
      "sickFadeBackground: Parent must set relative position for you to have a sick fade"
    );
  return css`
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      height: 100%;
      width: 50%;
      background: ${color};
      z-index: -1;
    }

    &::before {
      transform: translateX(-100%);
      background: linear-gradient(
        to left,
        ${color} 0%,
        ${color} 80%,
        transparent 100%
      );
    }
    &::after {
      background: linear-gradient(
        to right,
        ${color} 0%,
        ${color} 80%,
        transparent 100%
      );
    }
  `;
};

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 100vh;
  z-index: 1;

  ${Carousel} {
    flex-grow: 1;
  }
`;
const EducationBanner = styled(Banner)`
  /* ${centerContent} */
  /* width: 80vw;
  height: 80vh; */
  position: relative;

  ${sickFadeBackground("#e8d6d6", true)}
`;

const UNSWBanner = styled(Banner)`
  /* ${centerContent} */
  align-items: stretch;
  /* width: 80vw;
  height: 80vh; */
  position: relative;
  ${sickFadeBackground("#fde502", true)}

  ${CarouselItem} {
    ${centerContent}
  }
`;

const ExperienceBanner = styled(Banner)`
  position: relative;

  ${sickFadeBackground("#bba3ff", true)}
`;

const SkillsBanner = styled(Banner)`
  position: relative;

  ${sickFadeBackground("#adffad", true)}
`;

const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  -webkit-text-stroke: 3px hsl(0, 44%, 52%);
  color: #ff7777;
  font-weight: bold;
`;
