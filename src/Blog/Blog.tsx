import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { ShowTextWithStyle, StylishItem } from "../utils/ShowTextWithStyle";
import { centerContent, centerAbsolutely } from "../utils/styles";

export const Blog = () => {
  const [
    explainUnderstandableDiversion,
    setExplainUnderstandableDiversion,
  ] = useState<boolean>(false);
  const [baitReady, setBaitReady] = useState<boolean>(false);
  return (
    <BlogContainer>
      <StyledShowTextWithStyle>
        <StylishItem>
          <Text>
            <p>
              <i>*ahem*</i>
            </p>
          </Text>
        </StylishItem>
        <StylishItem>
          <Text>
            <p>
              Yes...here is my collection of consistently written blog posts.
            </p>
          </Text>
        </StylishItem>
        <StylishItem>
          <Text>Just click the button below to see them.</Text>
        </StylishItem>
        <SneakyItem onShow={() => setBaitReady(true)}>
          <Text>
            Oh what a shame!
            <SneakyButton
              canEscape={baitReady}
              onEscape={() => setExplainUnderstandableDiversion(true)}
            />
          </Text>
        </SneakyItem>
      </StyledShowTextWithStyle>
      {explainUnderstandableDiversion && (
        <StyledShowTextWithStyle>
          <StylishItem>
            <Text>The button ran away.</Text>
          </StylishItem>
          <StylishItem>
            <Text>
              I guess we can't see all the blogs I definitely wrote ¯\_(ツ)_/¯.
            </Text>
          </StylishItem>
        </StyledShowTextWithStyle>
      )}
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: flex-start;
  font-family: "Ubuntu";
  padding: 2rem;
  box-sizing: border-box;
  height: 100vh;
  color: #7b5f35;

  font-size: 1rem;

  @media screen and (max-width: 800px) {
    font-size: 90%;
  }

  @media screen and (max-width: 750px) {
    font-size: 80%;
  }

  @media screen and (max-width: 550px) {
    font-size: 70%;
  }

  @media screen and (max-height: 700px) {
    font-size: 50%;
  }
  /* background: #ffe3b9; */
`;

const StyledShowTextWithStyle = styled(ShowTextWithStyle)`
  ${centerContent}
  flex-direction: column;
`;

const Text = styled.div`
  position: relative;
  text-align: center;
  font-size: 2.5em;
  margin: 1rem;
`;

const SneakyItem = styled(StylishItem)`
  margin-top: 1rem;
`;

type SneakyButtonProps = {
  canEscape: boolean;
  onEscape: () => void;
};
const SneakyButton = ({ onEscape, canEscape }: SneakyButtonProps) => {
  const [shouldEscape, setShouldEscape] = useState<boolean>(false);

  const handleEscape = useCallback(() => {
    setShouldEscape(true);
    onEscape();
  }, [onEscape]);

  return (
    <SneakyButtonContainer
      onMouseEnter={canEscape ? handleEscape : undefined}
      onClick={canEscape ? handleEscape : undefined}
      runAway={shouldEscape}
    >
      Show Blogs
    </SneakyButtonContainer>
  );
};
const SneakyButtonContainer = styled.div<{ runAway: boolean }>`
  ${centerAbsolutely}

  ${centerContent}
  height: 100%;
  width: 100%;

  z-index: 2;

  padding: 1.5rem;

  background: #8888da;
  color: white;

  transition: transform 500ms ease-in;
  transform: ${(props) => props.runAway && `translate(-50%, 100vh)`};
`;
