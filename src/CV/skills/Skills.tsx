import React, { useEffect } from "react";
import styled from "styled-components";
import { CarouselBanner, Banner, TitleText } from "../styles";
import { SkillzThatKillz } from "./SkillzThatKillz";
import {
  HandCrankedCarousel,
  CarouselItem,
} from "../../utils/HandCrankedCarousel";
import { useInView } from "react-intersection-observer";
type SkillsProps = {
  onFinish: () => void;
};
export const Skills = ({ onFinish }: SkillsProps) => {
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
      <HandCrankedCarousel>
        <CarouselItem>
          <SkillsBanner>
            <SkillsTitle>Skills</SkillsTitle>
          </SkillsBanner>
        </CarouselItem>
        <StyledCarouselItem>
          <SkillzThatKillz />
        </StyledCarouselItem>
        <CarouselItem>
          <SkillsBanner ref={ref} />
        </CarouselItem>
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
