import React from "react";
import { CarouselItem } from "../../utils/Carousel";
import styled from "styled-components";
import { centerContent, centerAbsolutely } from "../../utils/styles";

export const GeointeractiveContent = () => {
  return (
    <>
      <StyledCarouselItem>
        <TitleSlide />
      </StyledCarouselItem>
      <StyledCarouselItem>
        <AchievementsContainer>
          <Title>What I've achieved</Title>
          <AchievementsContent>
            <ul>
              <li>
                Writing software in C++ for custom operation of machine vision
                cameras for autonomous flotation device
              </li>
              <li>
                Chose appropriate system architecture and choice elements: SBCs,
                modules and components
              </li>
              <li>
                Programmed microcontrollers, sensors, and IMUs to work in
                conjunction with an embedded single board computer
              </li>
              <li>Exercising AGILE software development methodology</li>
            </ul>
          </AchievementsContent>
        </AchievementsContainer>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <ReflectionsContainer>
          <Title>Reflections</Title>
          <ReflectionsContent>
            <ul>
              <li>
                Robots are cool. Whenever I'm working on a physical product, I
                end up building a relationship with it.
              </li>
              <li>
                Being in a startup incubator was interesting. Getting to see the
                different personalities and the whacky things the startups were
                working on was pretty insightful.
              </li>
              <li>
                The 'just make it happen' startup mentality was refreshing.
                Certainly different to the vicscous bureaucracy and hoopla I
                come to associate with larger organisations.
              </li>
            </ul>
          </ReflectionsContent>
        </ReflectionsContainer>
      </StyledCarouselItem>
    </>
  );
};

const StyledCarouselItem = styled(CarouselItem)`
  color: white;
  font-family: "Ubuntu";
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
  &::before {
    content: "";
    ${centerAbsolutely}
    height: 100vh;
    width: 100vw;
    background-image: url("http://geointeractive.com.au/wp-content/uploads/2017/09/Sewer_3d-1024x482.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: -1;
  }
`;

const Title = styled.div`
  filter: drop-shadow(2px 4px 6px black);
  font-size: 4rem;
  margin-bottom: 3rem;
`;

const ReflectionsContent = styled.div`
  filter: drop-shadow(2px 4px 6px black);
  margin: 1rem 3rem;
  font-size: 1.8rem;
`;

const TitleSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("http://geointeractive.com.au/wp-content/uploads/2017/09/Sewer-Entry_web.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 100%;
    width: 40%;
    background-image: url("http://geointeractive.co/wp-content/uploads/2017/10/logowhiteclean2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);
  }

  &::before {
    content: "";
    ${centerAbsolutely}
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;

const AchievementsContainer = styled.div`
  ${centerContent}
  max-width: 1500px;
  text-align: center;
  flex-direction: column;
  color: white;
  filter: drop-shadow(2px 4px 6px black);

  &::before {
    content: "";
    ${centerAbsolutely}
    height: 100vh;
    width: 100vw;
    background-image: url("http://geointeractive.com.au/wp-content/uploads/2017/09/Sewer_3d-1024x482.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: -1;
  }
`;

const AchievementsContent = styled.div`
  filter: drop-shadow(2px 4px 6px black);
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
