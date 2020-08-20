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
  background: hsla(-482, 100%, 84%, 1);
`;

const SkillsTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(241, 50%, 36%);
  color: hsla(241, 54%, 52%, 1);
`;
