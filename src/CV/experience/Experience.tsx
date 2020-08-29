import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { perxContent } from "./PerxContent";
import { geointeractiveContent } from "./GeointeractiveContent";
import { matrixContent } from "./MatrixContent";
import {
  CarouselItem,
  HandCrankedCarousel,
} from "../../utils/HandCrankedCarousel";
import { redbackContent } from "./RedbackContent";
import { useInView } from "react-intersection-observer";

type ExperienceProps = {
  onFinish: () => void;
};
export const Experience = ({ onFinish }: ExperienceProps) => {
  const [ref, inView, entry] = useInView({
    threshold: [0, 0.9],
  });

  useEffect(() => {
    if (inView) {
      onFinish();
      console.log("in veiw vewi!");
      setTimeout(() => {
        onFinish();
        console.log("fired");
      }, 200);
      setTimeout(() => {
        onFinish();
        console.log("fired");
      }, 1000);
    }
  }, [inView, onFinish]);
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
        <CarouselItem>
          <ExperienceBanner ref={ref} />
        </CarouselItem>
      </StyledCarousel>
    </CarouselBanner>
  );
};
const ScrollWatcher = styled.div`
  width: 10%;
  height: 100px;
`;
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
