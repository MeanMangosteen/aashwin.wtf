import React from "react";
import styled, { css } from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../utils/styles";
import { Carousel, CarouselItem } from "../utils/Carousel";
import { EducationContent } from "./EducationContent";
import { PerxContent } from "./experience/PerxContent";
import { GeointeractiveContent } from "./experience/GeointeractiveContent";
import { SkillzThatKillz } from "./SkillzThatKillz";
import { ImHumanContent } from "./ImHumanContent";
import { Experience } from "./experience/Experience";
import { Banner, CarouselBanner } from "./experience/styles";

export const CV = () => {
  return (
    <CVContainer>
      <UNSWBanner>
        <EducationContent />
      </UNSWBanner>
      <ExperienceBanner>
        <Experience />
      </ExperienceBanner>
      {/* <ExperienceBanner>
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
      </MatrixBanner> */}
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

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EducationBanner = styled(Banner)`
  position: relative;
  background: #e8d6d6;
`;

export const ExperienceBanner = styled(CarouselBanner)`
  position: relative;
  /* background: #bba3ff; */
`;

const SkillsBanner = styled(Banner)`
  position: relative;
  background: hsla(-482, 100%, 84%, 1);
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

export const ExperienceTitle = styled(TitleText)`
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
`;

const RedbackBanner = styled(CarouselBanner)``;

const PerxBanner = styled(CarouselBanner)``;

const GeointeractiveBanner = styled(CarouselBanner)``;

const MatrixBanner = styled(CarouselBanner)``;

const SkillzThatKillzBanner = styled(Banner)``;

const RealHumanBanner = styled(CarouselBanner)``;
