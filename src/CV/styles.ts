import styled from "styled-components";
import { Carousel, CarouselItem } from '../utils/Carousel';
import { centerContent, centerAbsolutely } from '../utils/styles';

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const CarouselBanner = styled(Banner)`
  align-items: stretch;
  position: relative;

  ${Carousel} {
    flex-grow: 1;
  }

  ${CarouselItem} {
    ${centerContent}
  }
`;

export const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  -webkit-text-stroke: 3px hsl(0, 44%, 52%);
  color: #ff7777;
  font-weight: bold;
  filter: drop-shadow(2px 4px 6px black);
  letter-spacing: 0.5rem;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 3rem;
    -webkit-text-stroke: 0!important;
    filter: drop-shadow(2px 4px 3px black);
  }
`;

export const OpeningSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 30%;
    width: 100%;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);

    @media screen and (max-width: 500px) {
      transform: translate(-50%, 0);
      top: 20%;
    }
  }



`;