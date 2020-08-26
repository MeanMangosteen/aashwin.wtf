import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { perxContent } from "./PerxContent";
import { geointeractiveContent } from "./GeointeractiveContent";
import { matrixContent } from "./MatrixContent";
import { CarouselItem, HandCrankedCarousel } from "../../utils/HandCrankedCarousel";
import { redbackContent } from "./RedbackContent";

export const Experience = () => {
  return (
    <CarouselBanner>
      <StyledCarousel>
        <CarouselItem>
          <ExperienceBanner>
            <ExperienceTitle>Experience</ExperienceTitle>
          </ExperienceBanner>
        </CarouselItem>
        {redbackContent}
        {perxContent}
        {geointeractiveContent}
        {matrixContent}
      </StyledCarousel>
    </CarouselBanner>
  );
};

const StyledCarousel = styled(HandCrankedCarousel)`
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
