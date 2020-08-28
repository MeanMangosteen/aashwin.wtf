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

`;

export const OpeningImage = styled.div`
    ${centerAbsolutely}
    height: 30%;
    width: 80%;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);

    transition: transform 200ms ease-out;
    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
    }

    @media screen and (max-width: 750px) {
      transform: translate(-50%, 0);
      top: 15%;

      &:hover {
        transform: translate(-50%, 0) scale(1.1);
      }
    }
`;

export const Title = styled.div`
  font-size: 4rem;
  /* -webkit-text-stroke: 1px black; */
  margin: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1100px) {
    margin-bottom: 2em;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    padding: 1rem;
  }

  @media screen and (max-height: 870px) {
    margin-bottom: 1em;
  }
`;

export const AchievementsContainer = styled.div`
  ${centerContent}
  flex-direction: column;

  padding: 0 2rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1600px;

  color: white;
  text-align: center;

  font-size: 1rem;

  max-width: 100vw;
  @media screen and (min-width: 1000px) {
    max-height: 100vh;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
`;

export const AchievementsContent = styled.div`
  font-size: 1.8em;
  ul {
    ${centerContent}
    align-items: stretch;
    padding: 0;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
  li {
    flex-basis: 0;
    flex-grow: 1;

    ${centerContent}
    margin: 1em;
    list-style: none;
    padding: 1em;

    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -1em;
      height: 1px;
      width: 50%;
    }

    &::before {
      left: 50%;
      background: linear-gradient(to right, white 0%, transparent 100%);
    }

    &::after {
      left: 50%;
      background: linear-gradient(to left, white 0%, transparent 100%);
      transform: translateX(-100%);
    }

    /* border: 2px solid white; */
  }
`;

export const ReflectionsContainer = styled.div`
  ${centerContent}
  flex-direction: column;

  padding: 0 2rem;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1100px;

  color: white;
  font-size: 1rem;

  max-width: 100vw;
  @media screen and (min-width: 1000px) {
    max-height: 100vh;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }

`;

export const ReflectionsContent = styled.div`
  margin: 1em 3em;
  font-size: 1.4em;

  ul {
    padding: 0;
  }
  li {
    margin: 1em;
  }
`;