import React from "react";
import styled from "styled-components";
import { centerContent } from "../utils/styles";
import {
  FavoriteSubjectsContainer,
  FavSubjectsTitle,
  FavSubjectsContent,
  SubjectContainer,
  SubjectTitle,
  SubjectContent,
} from "./education/Education";
import { CarouselBanner, Banner, TitleText } from "./styles";
import { CarouselWowItem, CarouselWow } from "../utils/CarouselWow";

export const ImARealBoy = () => {
  return (
    <CarouselBanner>
      <StyledCarousel>
        <CarouselWowItem>
          <ImHumanBanner>
            <ImHumanTitle>I'm not a pdf</ImHumanTitle>
          </ImHumanBanner>
        </CarouselWowItem>
        <CarouselWowItem>
          <TitleSlide>
            There is a real human behind this document. I promise.
          </TitleSlide>
        </CarouselWowItem>
        <CarouselWowItem>
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
                      I like doing things that haven't been done before or
                      thought not possible. A big part of which is learning by
                      experience what is and isn't possible.
                    </li>
                    <li>
                      Anything that explores what the human condition is capable
                      of, and gives insight into the game we call 'life'.
                    </li>
                    <li>
                      For me this can be anything from meditation or reading, to
                      fighting physical exhaustion or being alone on a windy
                      road.
                    </li>
                  </ul>
                </SubjectContent>
              </SubjectContainer>
            </FavSubjectsContent>
          </FavoriteSubjectsContainer>
        </CarouselWowItem>
        <CarouselWowItem>
          <RoleModelsContainer>
            <FavSubjectsTitle>Role Models</FavSubjectsTitle>
            <ol>
              <li>Michael Scott</li>
              <li>Courage the Cowardly Dog</li>
            </ol>
          </RoleModelsContainer>
        </CarouselWowItem>
      </StyledCarousel>
    </CarouselBanner>
  );
};

const ImHumanBanner = styled(Banner)`
  position: relative;
  background: #fff9ef;
`;

const ImHumanTitle = styled(TitleText)`
  -webkit-text-stroke: 3px hsl(37, 64%, 55%);
  color: hsl(37, 100%, 79%);
`;

const StyledCarousel = styled(CarouselWow)`
  font-family: "Ubuntu";
  background: blanchedalmond;
  color: #6f6b64;
`;

const TitleSlide = styled.div`
  ${centerContent}
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

// OMGTODO: remove below
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
