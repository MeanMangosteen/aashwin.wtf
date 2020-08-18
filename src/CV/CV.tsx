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
import { ImHumanContent } from "./ImHumanContent";

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
        <ExperienceTitle>Experience</ExperienceTitle>
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
        <SkillsTitle>Skills</SkillsTitle>
      </SkillsBanner>
      <SkillzThatKillzBanner>
        <SkillzThatKillz />
      </SkillzThatKillzBanner>
      <ImHumanBanner>
        <ImHumanTitle>I'm not a pdf</ImHumanTitle>
      </ImHumanBanner>
      <RealHumanBanner>
        <ImHumanContent />
      </RealHumanBanner>
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
  background: #e8d6d6;

  /* ${sickFadeBackground("#e8d6d6", true)} */
`;

const ExperienceBanner = styled(Banner)`
  position: relative;
  background: #bba3ff;
  /* ${sickFadeBackground("#bba3ff", true)} */
`;

const SkillsBanner = styled(Banner)`
  position: relative;
  background:hsla(-482, 100%, 84%, 1);

  /* ${sickFadeBackground("#adffad", true)} */
`;

const ImHumanBanner = styled(Banner)`
  position: relative;
  background: #fff9ef;
`;

export const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  -webkit-text-stroke: 3px hsl(0, 44%, 52%);
  color: #ff7777;
  font-weight: bold;
  filter: drop-shadow(2px 4px 6px black);
`;

const ExperienceTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(269, 100%, 42%);
  color: hsl(269, 100%, 50%);
`;

const SkillsTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(241, 50%, 36%);
  color: hsla(241, 54%, 52%, 1);
`;

const ImHumanTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(37, 64%, 55%);
  color: hsl(37, 100%, 79%);
`;

const UNSWBanner = styled(CarouselBanner)`
  background: #fde502;
  /* ${sickFadeBackground("#fde502", true)} */
`;

const RedbackBanner = styled(CarouselBanner)``;

const PerxBanner = styled(CarouselBanner)``;

const GeointeractiveBanner = styled(CarouselBanner)``;

const MatrixBanner = styled(CarouselBanner)``;

const SkillzThatKillzBanner = styled(Banner)``;

const RealHumanBanner = styled(CarouselBanner)``;
