import React, { useState } from "react";
import { Carousel, CarouselItem } from "../utils/Carousel";
import styled from "styled-components";
import { centerContent, centerAbsolutely } from "../utils/styles";
import {
  FavoriteSubjectsContainer,
  FavSubjectsTitle,
  FavSubjectsContent,
  SubjectContainer,
  SubjectTitle,
  SubjectContent,
} from "./UNSWContent";
import { SwitchTransition, Transition } from "react-transition-group";
import { ShowTextWithStyle, StylishItem } from "../utils/ShowTextWithStyle";

export const ImHumanContent = () => {
  return (
    <StyledCarousel running={false}>
      <CarouselItem>
        <TitleSlide>
          There is a real human behind this document. I promise.
        </TitleSlide>
      </CarouselItem>
      <CarouselItem>
        <FavoriteSubjectsContainer>
          <FavSubjectsTitle>Things that get me going</FavSubjectsTitle>
          <FavSubjectsContent>
            <SubjectContainer>
              <SubjectTitle>Sports</SubjectTitle>
              <SubjectContent>
                <ul>
                  <li>
                    I love watching and playing pretty much any sport. The
                    higher powers clearly have a problem with this as I seem
                    to be perpetually injured.
                  </li>
                  <li>
                    I'm currently partaking in some pretty interesting and
                    botique ones in that of: climbing and ultimate frisbee.
                  </li>
                </ul>
              </SubjectContent>
            </SubjectContainer>
            <SubjectContainer>
              <SubjectTitle>Two Wheelers</SubjectTitle>
              <SubjectContent>
                <ul>
                  <li>
                    I love fixing them, I love riding them, I don't love
                    crashing them. But hey, now I have a self sustaining
                    cycle, along with all my other ones.
                  </li>
                  <li>
                    These freedom machines are an absolute essential in the
                    Sydney Survial Toolkit
                  </li>
                </ul>
              </SubjectContent>
            </SubjectContainer>
            <SubjectContainer>
              <SubjectTitle>Breaking Reality</SubjectTitle>
              <SubjectContent>
                <ul>
                  <li>
                    It's thrilling to do things that haven't been done before or
                    thought not possible. Learning new things that become tools
                    for the imagination to paint it's pictures. For me this can
                    be anything from meditation and reading books, to fighting
                    exhaustion in important match or being alone on a windy
                    road.
                  </li>
                  <li>
                    Anything that explores what the human condition is capable
                    of, and gives insight into the game we call 'life'.
                  </li>
                </ul>
              </SubjectContent>
            </SubjectContainer>
          </FavSubjectsContent>
        </FavoriteSubjectsContainer>
      </CarouselItem>
      <CarouselItem>
        <RoleModelsContainer>
          <FavSubjectsTitle>Role Models</FavSubjectsTitle>
          <ol>
            <li>Micheal Scott</li>
            <li>Pop-eye the Sailor Man</li>
          </ol>
        </RoleModelsContainer>
      </CarouselItem>
    </StyledCarousel>
  );
};

const StyledCarousel = styled(Carousel)`
  font-family: "Ubuntu";
  /* background: rgba(39, 198, 219, 1); */
  background: blanchedalmond;
  color: #6f6b64;
`;

const TitleSlide = styled.div`
  font-size: 2rem;
`;

const RoleModelsContainer = styled.div`
  font-family: "Ubuntu";
  ${centerContent}
  flex-direction: column;

  ol {
    font-size: 2rem;
  }

  li {
    margin: 1rem;
  }
`;

const PhotoTime = () => {
  return (
    <PhotoTimeContainer>
      <PhotoTimeTitle>Photo Time!</PhotoTimeTitle>
      <PhotoSlideContainer>
        <Photo src="https://bikereview.com.au/wp-content/uploads/2018/03/2018-MV-Agusta-Brutale-800-RR-4020.jpg" />
        <PhotoCaption> Hey</PhotoCaption>
      </PhotoSlideContainer>
    </PhotoTimeContainer>
  );
};

const Photo = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
const PhotoCaption = styled.div`
  ${centerContent}
  justify-content: start;
`;
const PhotoSlideContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: auto;
  flex-grow: 1;
  margin: 4rem;
  filter: drop-shadow(2px 4px 6px black);
`;
const PhotoTimeTitle = styled(FavSubjectsTitle)`
  text-align: center;
`;
const PhotoTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  height: 100%;
  width: 100%;
`;

