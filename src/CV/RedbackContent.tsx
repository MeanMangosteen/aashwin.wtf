import React from "react";
import { Carousel, CarouselItem } from "../utils/Carousel";
import { TitleText } from "./CV";
import styled from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../utils/styles";

export const RedbackContent = () => {
  return (
    <Carousel running={false}>
      <CarouselItem>
        <TitleSlide />
      </CarouselItem>
      <CarouselItem>
        <ReflectionsContainer>
          <ReflectionsTitle>Favorite Subjects</ReflectionsTitle>
          <ReflectionsContent>
            <ul>
              <li>The first of many things!</li>
            </ul>
          </ReflectionsContent>
        </ReflectionsContainer>
      </CarouselItem>
      <CarouselItem>
        <TitleText>UNSW</TitleText>
      </CarouselItem>
    </Carousel>
  );
};

export const ReflectionsContainer = styled.div`
  font-family: "Ubuntu";
  ${centerContent}
  flex-direction: column;
`;
export const ReflectionsTitle = styled.div`
  font-size: 4rem;
  -webkit-text-stroke: 1px black;
  color: black;
  margin-bottom: 3rem;
  /* font-weight: bold; */
`;
export const ReflectionsContent = styled.div`
  ${centerContent}
  margin: 1rem 3rem;
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
`;

const TitleSlide = styled.div`
  position: relative;
  background: black;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 50%;
    width: 100%;

    background-image: url("https://uploads-ssl.webflow.com/5ec8ac71107e46be6b1f9449/5ec8b77a107e46318c1fb3aa_Redback_Racing_White_Transparent_Numberless.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
