import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { SkillzThatKillz } from "./SkillzThatKillz";
import { CarouselWow, CarouselWowItem } from "../../utils/CarouselWow";

export const Skills = () => {
  return (
    <CarouselBanner>
      <CarouselWow>
        <CarouselWowItem>
          <SkillsBanner>
            <SkillsTitle>Skills</SkillsTitle>
          </SkillsBanner>
        </CarouselWowItem>
        <CarouselWowItem>
          <SkillzThatKillz />
        </CarouselWowItem>
      </CarouselWow>
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
