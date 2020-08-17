import React from "react";
import styled, { css } from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../utils/styles";
import { Carousel, CarouselItem } from "../utils/Carousel";
import { UNSWContent } from "./UNSWContent";
import { RedbackContent } from "./RedbackContent";
import { PerxContent } from "./PerxContent";
import { GeointeractiveContent } from "./GeointeractiveContent";
import { MatrixContent } from "./MatrixContent";
import { SkillzThatKillz } from "./SkillzThatKillz";

export const CV = () => {
  return (
    <CVContainer>
      <EducationBanner>
        <TitleText>Education</TitleText>
      </EducationBanner>
      <UNSWBanner>
        <UNSWContent />
      </UNSWBanner>
      <ExperienceBanner>
        <TitleText>Experience</TitleText>
      </ExperienceBanner>
      <RedbackBanner>
        <RedbackContent />
      </RedbackBanner>
      <PerxBanner>
        <PerxContent />
      </PerxBanner>
      <GeointeractiveBanner>
        <GeointeractiveContent />
      </GeointeractiveBanner>
      <MatrixBanner>
        <MatrixContent />
      </MatrixBanner>
      <SkillsBanner>
        <TitleText>Skills</TitleText>
      </SkillsBanner>
      <SkillzThatKillzBanner>
        <SkillzThatKillz />
      </SkillzThatKillzBanner>
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
      /* background: linear-gradient(
        to left,
        ${color} 0%,
        ${color} 80%,
        transparent 100% 
      ); */
    }
    &::after {
      /* background: linear-gradient(
        to right,
        ${color} 0%,
        ${color} 80%,
        transparent 100% 
      ); */
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
  width: 100vw;
  height: 100vh;
  z-index: 1;

  ${Carousel} {
    flex-grow: 1;
  }
`;

const CarouselBanner = styled(Banner)`
  align-items: stretch;
  position: relative;

  ${CarouselItem} {
    ${centerContent}
  }
`;

const EducationBanner = styled(Banner)`
  position: relative;

  ${sickFadeBackground("#e8d6d6", true)}
`;

const ExperienceBanner = styled(Banner)`
  position: relative;

  ${sickFadeBackground("#bba3ff", true)}
`;

const SkillsBanner = styled(Banner)`
  position: relative;

  ${sickFadeBackground("#adffad", true)}
`;

export const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  -webkit-text-stroke: 3px hsl(0, 44%, 52%);
  color: #ff7777;
  font-weight: bold;
`;

const UNSWBanner = styled(CarouselBanner)`
  ${sickFadeBackground("#fde502", true)}
`;

const RedbackBanner = styled(CarouselBanner)``;

const PerxBanner = styled(CarouselBanner)``;

const GeointeractiveBanner = styled(CarouselBanner)``;

const MatrixBanner = styled(CarouselBanner)``;

const SkillzThatKillzBanner = styled(Banner)``;
