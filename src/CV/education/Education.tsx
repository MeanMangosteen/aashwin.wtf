import React from "react";
import styled from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../../utils/styles";
import { TitleText, CarouselBanner, Banner, OpeningSlide } from "../styles";
import { Bold } from "../../utils/styles";
import {
  HandCrankedCarousel,
  CarouselItem,
} from "../../utils/HandCrankedCarousel";
import { Carousel } from "../../utils/Carousel";

export const Education = () => {
  return (
    <CarouselBanner>
      <StyledCarouselWow>
        <CarouselItem>
          <EducationBanner>
            <TitleText>Education</TitleText>
          </EducationBanner>
        </CarouselItem>
        <CarouselItem>
          <TitleSlide>
            <ExperienceInfo />
          </TitleSlide>
        </CarouselItem>
        <CarouselItem>
          <FavoriteSubjectsContainer>
            <FavSubjectsTitle>Favorite Subjects</FavSubjectsTitle>
            <FavSubjectsContent>
              <SubjectContainer>
                <SubjectTitle>Operating Systems</SubjectTitle>
                <SubjectContent>
                  <p>
                    A deep dive into the <Bold>Linux kernel</Bold>: imple-mented
                    concurrency primitives, memory management, system calls, and
                    file system modules.
                  </p>
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Algorithms</SubjectTitle>
                <SubjectContent>
                  <p>
                    Study and design of algorithms considering{" "}
                    <Bold>computational complexity</Bold> using a variety of
                    techniques and data structures.
                  </p>
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Computer Networks</SubjectTitle>
                <SubjectContent>
                  <p>
                    Study of network stacks, various protocols{" "}
                    <Bold>(TCP, UDP)</Bold>, routing and the architecture of the
                    Internet
                  </p>
                </SubjectContent>
              </SubjectContainer>
            </FavSubjectsContent>
          </FavoriteSubjectsContainer>
        </CarouselItem>
      </StyledCarouselWow>
    </CarouselBanner>
  );
};

const StyledCarouselWow = styled(HandCrankedCarousel)`
  background: #ffdc00;
`;

const TitleSlide = styled(OpeningSlide)`
  &::after {
    background-image: url("https://warrane.unsw.edu.au/img/UNSW.png");
  }
`;

const ExperienceInfo = () => {
  return (
    <ExperienceInfoContainer>
      <DegreeText>Computer Science</DegreeText>
      <TimePeriod>2015-2019</TimePeriod>
    </ExperienceInfoContainer>
  );
};

const ExperienceInfoContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: "Ubuntu";

  font-size: 1rem;

  @media screen and (max-width: 500px) {
    transform: translate(-50%, 0%);
  }
`;

const DegreeText = styled.div`
  font-size: 4em;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 1em;

  @media screen and (max-width: 1050px), screen and (max-height: 1200px) {
    font-size: 3rem;
  }
`;
const TimePeriod = styled.div`
  font-size: 1.5em;
  font-style: italic;
  color: #3a3a3a;
`;

export const FavoriteSubjectsContainer = styled.div`
  ${centerContent}
  /* max-width: 100vw;
  max-height: 100vh; */
  margin: 0 auto;
  color: #3c3c3c;
  max-width: 1400px;
  font-family: "Ubuntu";
  flex-direction: column;
  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
  /* > * {
    flex-basis: 0;
    flex-grow: 1;
  } */
`;
export const FavSubjectsTitle = styled.div`
  ${centerContent}
  font-size: 4em;
  margin-bottom: 5em;
  color: #fff9ef;
  filter: drop-shadow(2px 4px 6px black);
  @media screen and (max-width: 1100px) {
    margin-bottom: 3em;
    /* font-size: 3em; */
  }

  @media screen and (max-height: 870px) {
    margin-bottom: 0em;
  }
  /* font-weight: bold; */
`;
export const FavSubjectsContent = styled.div`
  ${centerContent}
  align-items: start;
  margin: 1em 3em;
  > div {
    flex-basis: 0;
    flex-grow: 1;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
export const SubjectContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin: 1em;
`;

export const SubjectTitle = styled.div`
  ${centerContent}
  flex-direction: column;
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  position: relative;
  ${CSSDividerBottom({ width: "80%", iHaveSetRelativePosition: true })}
`;
export const SubjectContent = styled.div`
  padding: 1em;
  font-size: 1.5em;
  li {
    margin: 1em 0;
  }
`;

const EducationBanner = styled(Banner)`
  position: relative;
  /* background: #e8d6d6; */
  background: hsla(12, 190%, 87%, 1);
`;
