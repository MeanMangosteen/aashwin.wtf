import React from "react";
import styled from "styled-components";
import { centerContent, hoverGrow } from "../utils/styles";
import { MessageBox } from "./MessageBox";
import { ShowTextWithStyle, StylishItem } from "../utils/ShowTextWithStyle";
import AashwinsImageSrc from "../images/aashwin-plant-cropped.jpg";
import { AiFillGithub } from "react-icons/ai";

export const Connect = () => {
  return (
    <ConnectContainer>
      <AashwinsImageContainer>
        <AashwinsImage src={AashwinsImageSrc} />
      </AashwinsImageContainer>
      <StyledShowTextWithStyle>
        <StylishItem>
          <IAmContainer>
            <IAmText>I am</IAmText>
            <FullNameText>Aashwin Varshney</FullNameText>
          </IAmContainer>
        </StylishItem>
        <GetInTouchText>Get in touch...</GetInTouchText>
        <OnYourMindText>...or leave a thought</OnYourMindText>
        <StylishMessageBoxItem>
          <StyledMessageBox onSend={(input) => {}} />
        </StylishMessageBoxItem>
        <StylishItem>
          <GithubContainer
            onClick={() =>
              window.open("https://github.com/MeanMangosteen/", "_blank")
            }
          >
            <GithubText>Find me on Github</GithubText>
            <GithubIconContainer>
              <GithubIcon />
            </GithubIconContainer>
          </GithubContainer>
        </StylishItem>
      </StyledShowTextWithStyle>
    </ConnectContainer>
  );
};

const ConnectContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-rows: 40vh auto;
  grid-template-columns: auto;
  justify-items: center;

  @media screen and (min-width: 1250px) {
    height: 100vh;
    max-height: 100vh;
  }
  max-width: 100vw;

  font-family: "Ubuntu";
  text-align: center;
  font-size: 1.5rem;

  padding: 2rem;
  box-sizing: border-box;
  /* background: #ffe3b9; */

  color: hsla(33, 44%, 32%, 1);
`;

const AashwinsImageContainer = styled.div`
  ${centerContent}
  max-width: 1000px;
  max-width: 700px;
  /* margin-bottom: 2rem; */
`;

const AashwinsImage = styled.img`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: drop-shadow(2px 4px 6px black);
`;

const StyledShowTextWithStyle = styled(ShowTextWithStyle)`
  display: grid;
  grid-template-rows: 1fr 0.25fr 0.25fr 1fr;
  grid-template-columns: auto;
  place-items: center;

  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 1250px) {
    ${centerContent}
    flex-direction: column;

    > * {
      padding: 1rem;
    }
  }

  height: 100%;

  box-sizing: border-box;
`;

const IAmContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin-bottom: 1rem;

  @media screen and (max-width: 1250px) {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const IAmText = styled.div`
  font-size: 0.8em;
`;

const FullNameText = styled.div`
  font-size: 2em;
`;

const PromptTextContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  align-items: stretch;
`;
const GetInTouchText = styled(StylishItem)`
  place-self: stretch;
  font-size: 1em;
  text-align: left;
  /* transform: translateX(-100%); */
`;

const OnYourMindText = styled(StylishItem)`
  place-self: stretch;
  font-size: 1em;
  text-align: right;
  /* transform: translateX(20%); */
`;

const StylishMessageBoxItem = styled(StylishItem)`
  place-self: stretch;
`;
const StyledMessageBox = styled(MessageBox)`
  height: 100%;
  /* min-width: 550px; */
  font-family: "Ubuntu";
`;

// =======================================
const GithubContainer = styled.div`
  position: absolute;
  @media screen and (max-width: 1250px) {
    position: static;
    margin-top: 6rem;
  }

  top: 1.5rem;
  right: 1.5rem;

  @media screen and (max-width: 1250px) {
    bottom: 0;
    left: 50%;
  }

  ${centerContent}
  flex-direction: column;

  border: 3px solid;
  border-radius: 10px;

  /* box-shadow: 2px 2px 2px 2px #6b5432; */
  box-shadow: 2px 2px 4px 1px #5d5143;

  &:hover {
    transform: scale(1.1);
  }
  transition: transform 200ms ease-out;
`;

const GithubText = styled.div`
  font-size: 1.2rem;
  padding: 0.8rem;
  color: black;
`;

const GithubIconContainer = styled.div`
  ${centerContent}
  height: 7vh;
  width: 7vh;
`;
const GithubIcon = styled(AiFillGithub)`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  object-fit: contain;
  color: black;
`;
