import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { SkillzThatKillz } from "./SkillzThatKillz";
import {
  HandCrankedCarousel,
  CarouselItem,
} from "../../utils/HandCrankedCarousel";

export const Skills = () => {
  return (
    <CarouselBanner>
      <HandCrankedCarousel>
        <CarouselItem>
          <SkillsBanner>
            <SkillsTitle>Skills</SkillsTitle>
          </SkillsBanner>
        </CarouselItem>
        <StyledCarouselItem>
          <SkillzThatKillz />
        </StyledCarouselItem>
      </HandCrankedCarousel>
    </CarouselBanner>
  );
};

const StyledCarouselItem = styled(CarouselItem)`
  background: hsla(290, 20%, 20%, 1);
`;
const SkillsBanner = styled(Banner)`
  position: relative;
  background: #bba3ff;
`;

const SkillsTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(269, 100%, 42%);
  color: hsl(269, 100%, 50%);
`;
