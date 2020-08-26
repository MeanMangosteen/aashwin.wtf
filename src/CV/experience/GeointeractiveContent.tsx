import React from "react";
import styled from "styled-components";
import { centerContent, centerAbsolutely, Bold } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";
import { CarouselWowItem } from "../../utils/CarouselWow";

const StyledExperienceInfo = styled(ExperienceInfo)`
  filter: brightness(4);
`;

const StyledCarouselItem = styled(CarouselWowItem)`
  color: white;
  font-family: "Ubuntu";
`;

const ReflectionsContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  color: white;
  margin: 0 auto;
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

const TitleImage = styled.div`
  ${centerAbsolutely}
  height: 100%;
  width: 40%;
  background-image: url("http://geointeractive.co/wp-content/uploads/2017/10/logowhiteclean2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(2px 4px 6px black);

  transition: transform 200ms ease-out;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
const TitleSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("http://geointeractive.com.au/wp-content/uploads/2017/09/Sewer-Entry_web.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  /* &::after {
    content: "";
    ${centerAbsolutely}
    height: 100%;
    width: 40%;
    background-image: url("http://geointeractive.co/wp-content/uploads/2017/10/logowhiteclean2.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);
  } */

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
  margin: 0 auto;
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
    align-items: stretch;
  }
  li {
    flex-basis: 0;
    flex-grow: 1;

    ${centerContent}
    margin: 1rem;
    list-style: none;
    padding: 1rem;

    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -1rem;
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

export const geointeractiveContent = (
  <>
    <StyledCarouselItem>
      <TitleSlide>
        <TitleImage
          onClick={() => window.open("http://geointeractive.com.au/", "_blank")}
        />
        <StyledExperienceInfo
          position="Software/Embedded Systems Developer"
          location="Sydney CBD"
          time="Jun 2017 - Jul 2018"
        />
      </TitleSlide>
    </StyledCarouselItem>
    <StyledCarouselItem>
      <AchievementsContainer>
        <Title>What I've achieved</Title>
        <AchievementsContent>
          <ul>
            <li>
              <p>
                Wrote software for custom operation of machine vision cameras
                for autonomous flotation device in <Bold>C++</Bold>
              </p>
            </li>
            <li>
              <p>
                Chose appropriate system architecture and choice elements: SBCs,
                modules and components
              </p>
            </li>
            <li>
              <p>
                Programmed microcontrollers, sensors, and IMUs to work in
                conjunction with an embedded single board computer
              </p>
            </li>
            <li>
              <p>
                Exercised <Bold>AGILE</Bold> software development methodology
              </p>
            </li>
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
              Robots are cool. Whenever I'm working on a physical product, I end
              up building a relationship with it.
            </li>
            <li>
              Being in a startup incubator was interesting. Getting to see the
              different personalities that make a start up tick and the whacky
              things everyone was working on was pretty insightful.
            </li>
            <li>
              The 'just make it happen' startup mentality was refreshing.
              Certainly different to the viscous decision making I've come to
              associate with larger organisations.
            </li>
          </ul>
        </ReflectionsContent>
      </ReflectionsContainer>
    </StyledCarouselItem>
  </>
);
