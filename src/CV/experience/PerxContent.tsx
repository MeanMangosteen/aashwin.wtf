import React from "react";
import { CarouselItem } from "../../utils/Carousel";
import styled from "styled-components";
import { centerContent, centerAbsolutely, Bold } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";

export const PerxContent = () => {
  return (
    <>
      <StyledCarouselItem>
        <TitleSlide>
          <TitleImage
            onClick={() => window.open("https://perxhealth.com/", "_blank")}
          />
          <ExperienceInfo
            position="Software Engineering Intern"
            location="Surry Hills"
            time="June 2017 - December 2017"
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
                  Automated processing of PDFs: used computer vision to locate
                  and crop region of interest using <Bold>Python</Bold>
                </p>
              </li>
              <li>
                <p>
                  Created end-to-end testing tool using <Bold>Python</Bold> for
                  non-technial stakeholders. Created visualizations of results.
                </p>
              </li>
              <li>
                <p>
                  Used <Bold>computer vision</Bold> to locate and determine
                  probability that certain objects are in an image
                </p>
              </li>
              <li>
                <p>
                  REST API <Bold>unit testing</Bold> using Postman
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
              <li> First job in the industry. Yay!</li>
              <li>Jobs aren't that scary.</li>
              <li>Work can be fun.</li>
              <li>You learn just as much on the job as you do in Uni.</li>
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
  background: hsla(187, 74%, 50%, 1);
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
  margin-bottom: 3rem;
`;

const ReflectionsContent = styled.div`
  margin: 1rem 3rem;
  font-size: 1.8rem;
`;

const TitleImage = styled.div`
  ${centerAbsolutely}
  height: 30%;
  width: 100%;

  background-image: url("https://perxhealth.com/static/7d0954425eacb2c83d40c1eb90a441f6/b9595/perx-logo.png");
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
  background: radial-gradient(
    ellipse closest-corner,
    rgba(255, 255, 255, 1) 25%,
    rgba(39, 198, 219, 1) 100%
  );
  height: 100%;
  width: 100%;

  /* &::after {
    content: "";
    ${centerAbsolutely}
    height: 30%;
    width: 100%;

    background-image: url("https://perxhealth.com/static/7d0954425eacb2c83d40c1eb90a441f6/b9595/perx-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);
  } */
`;
const AchievementsContainer = styled.div`
  ${centerContent}
  max-width: 1500px;
  flex-direction: column;
  color: white;
  filter: drop-shadow(2px 4px 6px black);
  text-align: center;
`;

const AchievementsContent = styled.div`
  font-size: 1.8rem;
  ul {
    ${centerContent}
    align-items: stretch;
  }
  li {
    flex-basis: 0;
    flex-grow: 1;

    ${centerContent}
    list-style: none;
    padding: 1rem;
    margin: 1rem;

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
  }
`;
