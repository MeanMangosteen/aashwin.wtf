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
          There's a real human behind document. I promise.
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
                    higher powers clearly have a problem with this as I'm seem
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
                    crashing them. But hey, now you have a self sustaining
                    cycle.
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
        <PhotoTime />
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

const TitleSlide = styled.div``;

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

// =======================================================

// const Images = {
//   Empty:
//     "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
//   Bike:
//     "https://bikereview.com.au/wp-content/uploads/2018/03/2018-MV-Agusta-Brutale-800-RR-4020.jpg",
// } as const;

// <PhotoTimeContainer>
//   <PhotoTimeTitle>Photo Time!</PhotoTimeTitle>
//   <EpisodeContainer>
//     <PictureContainer>
//       <SwitchTransition>
//         <Transition key={currImage} timeout={1000}>
//           {(state) => <Image src={currImage} state={state} />}
//         </Transition>
//       </SwitchTransition>
//     </PictureContainer>
//     <TextContainer>
//       <ShowTextWithStyle key="ep1">
//         <StylishItem
//           onShow={() => {
//             setCurrImage(Images.Bike);
//           }}
//         >
//           <Text>Do you have sleepless nights?</Text>
//         </StylishItem>
//         <StylishItem>
//           <Text>Don't have the perfect body?</Text>
//         </StylishItem>
//       </ShowTextWithStyle>
//     </TextContainer>
//   </EpisodeContainer>

/* opacity: ${(props: { state: any }) =>
    props.state === "entered" ? 1 : 0}; */
const EpisodeContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;

  transition: 0.5s;
  opacity: 1;
  will-change: opacity;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PictureContainer = styled.div`
  box-sizing: border-box;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Text = styled.div`
  text-align: center;
  font-size: 4rem;
  margin: 2rem;
`;

const SmallText = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem;
`;

const Image = styled.img`
  transition: 1s;
  transition-delay: 0.5s;
  opacity: ${(props: { state: any }) => (props.state === "entered" ? 1 : 0)};
  will-change: opacity;

  object-fit: contain;
  height: 100%;
  width: 100%;
`;
