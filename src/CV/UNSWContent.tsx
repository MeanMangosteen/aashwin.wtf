import React from "react";
import { Carousel, CarouselItem } from "../utils/Carousel";
import { TitleText } from "./CV";
import styled from "styled-components";
import { centerContent, CSSDividerBottom } from "../utils/styles";

export const UNSWContent = () => {
  return (
    <Carousel running={false}>
      <CarouselItem>
        <FavoriteSubjectsContainer>
          <FavSubjectsTitle>Favorite Subjects</FavSubjectsTitle>
          <FavSubjectsContent>
            <SubjectContainer>
              <SubjectTitle>Operating Systems</SubjectTitle>
              <SubjectContent>
                Covered concepts and mechanisms of modern operating systems. A
                deep dive into the Linux kernel: imple-mented concurrency
                primitives, memory management, system calls, and file system
                modules.
              </SubjectContent>
            </SubjectContainer>
            <SubjectContainer>
              <SubjectTitle>Operating Systems</SubjectTitle>
              <SubjectContent>
                Covered concepts and mechanisms of modern operating systems. A
                deep dive into the Linux kernel: imple-mented concurrency
                primitives, memory management, system calls, and file system
                modules.
              </SubjectContent>
            </SubjectContainer>
            <SubjectContainer>
              <SubjectTitle>Operating Systems</SubjectTitle>
              <SubjectContent>
                Covered concepts and mechanisms of modern operating systems. A
                deep dive into the Linux kernel: imple-mented concurrency
                primitives, memory management, system calls, and file system
                modules.
              </SubjectContent>
            </SubjectContainer>
          </FavSubjectsContent>
        </FavoriteSubjectsContainer>
      </CarouselItem>
      <CarouselItem>
        <TitleText>UNSW</TitleText>
      </CarouselItem>
    </Carousel>
  );
};

export const FavoriteSubjectsContainer = styled.div`
  font-family: "Ubuntu";
  ${centerContent}
  flex-direction: column;
`;
export const FavSubjectsTitle = styled.div`
  font-size: 4rem;
  margin-bottom: 3rem;
  color: #fff9ef;
  filter: drop-shadow(2px 4px 6px black);
  /* font-weight: bold; */
`;
export const FavSubjectsContent = styled.div`
  ${centerContent}
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
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  position: relative;
  ${CSSDividerBottom({ width: "80%", iHaveSetRelativePosition: true })}
`;
export const SubjectContent = styled.div`
  padding: 1rem;
  font-size: 1.3rem;
  li {
    margin: 1rem 0;
  }
`;
