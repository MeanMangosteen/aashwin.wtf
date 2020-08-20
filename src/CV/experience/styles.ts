import styled from "styled-components";
import { Carousel, CarouselItem } from '../../utils/Carousel';
import { centerContent } from '../../utils/styles';

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
`;