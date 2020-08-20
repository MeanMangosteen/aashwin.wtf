import React from "react";
import { Carousel, CarouselItem } from "../../utils/Carousel";
import { RedbackContent } from "./RedbackContent";
import styled from "styled-components";
import { CarouselBanner, Banner } from "./styles";
import { ExperienceTitle } from "../CV";
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
