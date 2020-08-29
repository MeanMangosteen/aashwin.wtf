import React from "react";
import styled from "styled-components";
import { Bold } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";
import { CarouselItem } from "../../utils/HandCrankedCarousel";
import {
  OpeningImage,
  OpeningSlide,
  AchievementsContainer,
  Title,
  AchievementsContent,
  ReflectionsContainer,
  ReflectionsContent,
} from "../styles";

const StyledCarouselItem = styled(CarouselItem)`
  color: white;
  font-family: "Ubuntu";
  background: hsl(187, 71%, 64%);
`;

const StyledReflectionsContainer = styled(ReflectionsContainer)`
  filter: drop-shadow(2px 4px 6px black);
`;

const StyledTitle = styled(Title)`
  font-size: 4rem;
  margin-bottom: 3rem;
  -webkit-text-stroke: 0;
`;

const TitleImage = styled(OpeningImage)`
  background-image: url("https://perxhealth.com/static/7d0954425eacb2c83d40c1eb90a441f6/b9595/perx-logo.png");
`;

const TitleSlide = styled(OpeningSlide)`
  background: radial-gradient(
    ellipse closest-corner,
    rgba(255, 255, 255, 1) 25%,
    rgba(39, 198, 219, 1) 100%
  );
`;
const StyledAchievementsContainer = styled(AchievementsContainer)`
  color: white;
  filter: drop-shadow(2px 4px 6px black);
`;

export const perxContent = (
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
      <StyledAchievementsContainer>
        <StyledTitle>What I've achieved</StyledTitle>
        <AchievementsContent>
          <ul>
            <li>
              <p>
                Automated processing of PDFs: used computer vision to locate and
                crop region of interest using <Bold>Python</Bold>
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
      </StyledAchievementsContainer>
    </StyledCarouselItem>
    <StyledCarouselItem>
      <StyledReflectionsContainer>
        <StyledTitle>Reflections</StyledTitle>
        <ReflectionsContent>
          <ul>
            <li> First job in the industry. Yay!</li>
            <li>Jobs aren't that scary.</li>
            <li>Work can be fun.</li>
            <li>You learn just as much on the job as you do in Uni.</li>
          </ul>
        </ReflectionsContent>
      </StyledReflectionsContainer>
    </StyledCarouselItem>
  </>
);
