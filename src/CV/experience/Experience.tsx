import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { perxContent } from "./PerxContent";
import { geointeractiveContent } from "./GeointeractiveContent";
import { matrixContent } from "./MatrixContent";
import { CarouselWowItem, CarouselWow } from "../../utils/CarouselWow";
import { redbackContent } from "./RedbackContent";

export const Experience = () => {
  return (
    <CarouselBanner>
      <StyledCarousel>
        <CarouselWowItem>
          <ExperienceBanner>
            <ExperienceTitle>Experience</ExperienceTitle>
          </ExperienceBanner>
        </CarouselWowItem>
        {redbackContent}
        {perxContent}
        {geointeractiveContent}
        {matrixContent}
      </StyledCarousel>
    </CarouselBanner>
  );
};

const StyledCarousel = styled(CarouselWow)`
  color: white;
`;

const ExperienceBanner = styled(Banner)`
  position: relative;
  background: hsla(218, 100%, 84%, 1);
`;

const ExperienceTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(241, 59%, 55%);
  color: hsl(226, 82%, 65%);
`;
