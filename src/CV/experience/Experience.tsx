import React from "react";
import { Carousel, CarouselItem } from "../../utils/Carousel";
import { RedbackContent } from "./RedbackContent";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { PerxContent } from "./PerxContent";
import { GeointeractiveContent } from "./GeointeractiveContent";
import { MatrixContent } from "./MatrixContent";

export const Experience = () => {
  return (
    <CarouselBanner>
      <Carousel running={false}>
        <CarouselItem>
          <ExperienceBanner>
            <ExperienceTitle>Experience</ExperienceTitle>
          </ExperienceBanner>
        </CarouselItem>
        <RedbackContent />
        <PerxContent />
        <GeointeractiveContent />
        <MatrixContent />
      </Carousel>
    </CarouselBanner>
  );
};

const ExperienceBanner = styled(Banner)`
  position: relative;
  background: #bba3ff;
`;

const ExperienceTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(269, 100%, 42%);
  color: hsl(269, 100%, 50%);
`;
