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