import React from "react";
import { Carousel, CarouselItem } from "../../utils/Carousel";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { SkillzThatKillz } from "./SkillzThatKillz";

export const Skills = () => {
  return (
    <CarouselBanner>
      <Carousel running={false}>
        <CarouselItem>
          <SkillsBanner>
            <SkillsTitle>Skills</SkillsTitle>
          </SkillsBanner>
        </CarouselItem>
        <CarouselItem>
          <SkillzThatKillz />
        </CarouselItem>
      </Carousel>
    </CarouselBanner>
  );
};

const SkillsBanner = styled(Banner)`
  position: relative;
  background: #bba3ff;
`;

const SkillsTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(269, 100%, 42%);
  color: hsl(269, 100%, 50%);
`;
