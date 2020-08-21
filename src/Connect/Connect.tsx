import React from "react";
import styled from "styled-components";
import { centerContent } from "../utils/styles";
import { MessageBox } from "./MessageBox";
import { ShowTextWithStyle, StylishItem } from "../utils/ShowTextWithStyle";
import AashwinsImageSrc from "../images/aashwin-plant-cropped.jpg";

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
      </StyledShowTextWithStyle>
    </ConnectContainer>
  );
};

const ConnectContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  grid-template-columns: auto;
  justify-items: center;

  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  font-family: "Ubuntu";
  text-align: center;
  font-size: 1.5rem;

  padding: 2rem;
  box-sizing: border-box;
  background: #ffe3b9;

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

  height: 100%;

  box-sizing: border-box;
`;

const IAmContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin-bottom: 1rem;
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
  min-width: 550px;
  font-family: "Ubuntu";
`;
