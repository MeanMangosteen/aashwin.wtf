import React from "react";
import styled, { css } from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../utils/styles";
import { Carousel, CarouselItem } from "../utils/Carousel";
import { Education } from "./EducationContent";
import { PerxContent } from "./experience/PerxContent";
import { GeointeractiveContent } from "./experience/GeointeractiveContent";
import { SkillzThatKillz } from "./SkillzThatKillz";
import { ImHumanContent } from "./ImHumanContent";
import { Experience } from "./experience/Experience";
import { Banner, CarouselBanner, TitleText } from "./experience/styles";
import { Skills } from "./Skills";

export const CV = () => {
  return (
    <CVContainer>
      <Education />
      <Experience />
      <Skills />
      <ImHumanContent />
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

export const ExperienceTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(269, 100%, 42%);
  color: hsl(269, 100%, 50%);
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
