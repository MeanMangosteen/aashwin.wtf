import React from "react";
import { Carousel, CarouselItem } from "../../utils/Carousel";
import styled from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../../utils/styles";
import { TitleText, CarouselBanner, Banner } from "../styles";
import { Experience } from "../experience/Experience";

export const Education = () => {
  return (
    <CarouselBanner>
      <StyledCarousel running={false}>
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
                  A deep dive into the Linux kernel: imple-mented concurrency
                  primitives, memory management, system calls, and file system
                  modules.
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Algorithms</SubjectTitle>
                <SubjectContent>
                  Study and design of algorithms considering computational
                  complexity using a variety of techniques and data structures.
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Computer Networks</SubjectTitle>
                <SubjectContent>
                  Study of network stacks, various protocols (TCP, UDP), routing
                  and the architecture of the Internet
                </SubjectContent>
              </SubjectContainer>
            </FavSubjectsContent>
          </FavoriteSubjectsContainer>
        </CarouselItem>
      </StyledCarousel>
    </CarouselBanner>
  );
};

const StyledCarousel = styled(Carousel)`
  background: #ffdc00;
`;

const TitleSlide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 30%;
    width: 100%;

    background-image: url("https://warrane.unsw.edu.au/img/UNSW.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    filter: drop-shadow(2px 4px 6px black);
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
  transform: translate(-50%, -100%);
  font-family: "Ubuntu";
`;

const DegreeText = styled.div`
  font-size: 4rem;
  color: #3a3a3a;
`;
const TimePeriod = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  color: #3a3a3a;
`;

export const FavoriteSubjectsContainer = styled.div`
  ${centerContent}
  color: #3c3c3c;
  max-width: 1400px;
  font-family: "Ubuntu";
  flex-direction: column;
  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;
export const FavSubjectsTitle = styled.div`
  ${centerContent}
  font-size: 4rem;
  margin-bottom: 3rem;
  color: #fff9ef;
  filter: drop-shadow(2px 4px 6px black);
  /* font-weight: bold; */
`;
export const FavSubjectsContent = styled.div`
  ${centerContent}
  align-items: start;
  margin: 1rem 3rem;
  > div {
    flex-basis: 0;
    flex-grow: 1;
  }
`;
export const SubjectContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin: 1rem;
`;

export const SubjectTitle = styled.div`
  ${centerContent}
  flex-direction: column;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  position: relative;
  ${CSSDividerBottom({ width: "80%", iHaveSetRelativePosition: true })}
`;
export const SubjectContent = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  li {
    margin: 1rem 0;
  }
`;

const EducationBanner = styled(Banner)`
  position: relative;
  background: #e8d6d6;
`;
