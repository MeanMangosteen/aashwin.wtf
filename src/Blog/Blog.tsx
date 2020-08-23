import React, { useState } from "react";
import styled from "styled-components";
import { ShowTextWithStyle, StylishItem } from "../utils/ShowTextWithStyle";
import { centerContent, centerAbsolutely } from "../utils/styles";

export const Blog = () => {
  return (
    <BlogContainer>
      <StyledShowTextWithStyle skipWaitingGame>
        <StylishItem>
          <Text>*Ahem* Yes..I have written many blogs posts.</Text>
        </StylishItem>
        <StylishItem>
          <Text>
            I'm definitely not hiding that I haven't actually written any.
          </Text>
        </StylishItem>
        <StylishItem>
          <Text>Just click the button below to see them.</Text>
        </StylishItem>
        <SneakyItem>
          <Text>
            Oh what a shame!
            <SneakyButton />
          </Text>
        </SneakyItem>
      </StyledShowTextWithStyle>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  ${centerContent}
  font-family: "Ubuntu";
  padding: 2rem;
  height: 100vh;
`;

const StyledShowTextWithStyle = styled(ShowTextWithStyle)`
  ${centerContent}
  flex-direction: column;
`;

const Text = styled.div`
  position: relative;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem;
`;

const SneakyItem = styled(StylishItem)`
  margin-top: 1rem;
`;

const SneakyButton = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  console.log(clicked);
  return (
    <SneakyButtonContainer
      onMouseEnter={() => setClicked(true)}
      clicked={clicked}
    >
      Show Blogs
    </SneakyButtonContainer>
  );
};
const SneakyButtonContainer = styled.div<{ clicked: boolean }>`
  ${centerAbsolutely}

  ${centerContent}
  height: 100%;
  width: 100%;

  z-index: 2;

  padding: 1.5rem;

  background: #8888da;

  transition: transform 500ms ease-in;
  transform: ${(props) => props.clicked && `translate(-50%, 100vh)`};
`;
