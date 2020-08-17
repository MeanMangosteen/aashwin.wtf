import React from "react";
import { Carousel, CarouselItem } from "../utils/Carousel";
import styled from "styled-components";
import { centerContent, centerAbsolutely } from "../utils/styles";

export const PerxContent = () => {
  return (
    <StyledCarousel running={false}>
      <CarouselItem>
        <TitleSlide />
      </CarouselItem>
      <CarouselItem>
        <AchievementsContainer>
          <Title>What I've achieved</Title>
          <AchievementsContent>
            <ul>
              <li>
                Automated processing of PDFs: used computer vision to locate and
                crop region of interest using Python
              </li>
              <li>
                Created end-to-end testing tool using Python for non-technial
                stakeholders. Created visualizations of results.
              </li>
              <li>
                Used computer vision to locate and determine probability that
                certain objects are in an image
              </li>
              <li>REST API unit testing using Postman</li>
            </ul>
          </AchievementsContent>
        </AchievementsContainer>
      </CarouselItem>
      <CarouselItem>
        <ReflectionsContainer>
          <Title>Reflections</Title>
          <ReflectionsContent>
            <ul>
              <li> First job in the industry. Yay!</li>
              <li>Jobs aren't that scary.</li>
              <li>Work can be fun.</li>
              <li>You learn just as much on the job as you do in Uni.</li>
            </ul>
          </ReflectionsContent>
        </ReflectionsContainer>
      </CarouselItem>
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
  color: white;
  font-family: "Ubuntu";
  background: rgba(39, 198, 219, 1);
`;

const ReflectionsContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  color: white;
  max-width: 1000px;
  filter: drop-shadow(2px 4px 6px black);

  li {
    margin: 1rem;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  /* -webkit-text-stroke: 1px black; */
  margin-bottom: 3rem;
  /* font-weight: bold; */
`;

const ReflectionsContent = styled.div`
  margin: 1rem 3rem;
  font-size: 1.8rem;
`;

const TitleSlide = styled.div`
  position: relative;
  background: radial-gradient(
    ellipse closest-corner,
    rgba(255, 255, 255, 1) 25%,
    rgba(39, 198, 219, 1) 100%
  );
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 30%;
    width: 100%;

    background-image: url("https://perxhealth.com/static/7d0954425eacb2c83d40c1eb90a441f6/b9595/perx-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);
  }
`;
const AchievementsContainer = styled.div`
  ${centerContent}
  max-width: 1500px;
  flex-direction: column;
  color: white;
  filter: drop-shadow(2px 4px 6px black);
`;

const AchievementsContent = styled.div`
  font-size: 1.8rem;
  ul {
    ${centerContent}
    align-items: start;
    > li {
      flex-basis: 0;
      flex-grow: 1;
    }
  }
  li {
    margin: 1rem;
    list-style: none;
  }
`;
