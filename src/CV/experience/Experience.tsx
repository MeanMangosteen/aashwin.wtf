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
      <StyledCarousel running={false}>
        <CarouselItem>
          <ExperienceBanner>
            <ExperienceTitle>Experience</ExperienceTitle>
          </ExperienceBanner>
        </CarouselItem>
        <RedbackContent />
        <PerxContent />
        <GeointeractiveContent />
        <MatrixContent />
      </StyledCarousel>
    </CarouselBanner>
  );
};

const StyledCarousel = styled(Carousel)`
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
