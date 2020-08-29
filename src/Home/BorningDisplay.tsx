import React from "react";
import styled from "styled-components";
import { centerContent } from "../utils/styles";
import ToolboxSVG from "../images/toolbox.svg";
import ArmyKnifeSVG from "../images/swiss-army-knife.svg";
import MegaphoneSVG from "../images/megaphone.svg";
import { BaseLink } from "../utils/helpers";

type BoringDisplayProps = {
  // imgSrc: string;
  className?: string;
};
export const BoringDisplay = ({ className = "" }: BoringDisplayProps) => {
  return (
    <BoringDisplayContainer className={className}>
      <IconContainer to="/cv">
        <Img src={ArmyKnifeSVG}></Img>
        <IconText>CV</IconText>
      </IconContainer>
      <IconContainer to="/projects">
        <Img src={ToolboxSVG}></Img>
        <IconText>Projects</IconText>
      </IconContainer>
      <IconContainer to="/blog">
        <Img src={MegaphoneSVG}></Img>
        <IconText>Blog</IconText>
      </IconContainer>
      <IconContainer to="/about">
        <Img src="https://i.imgur.com/FXquf4T.png"></Img>
        <IconText>Connect</IconText>
      </IconContainer>
    </BoringDisplayContainer>
  );
};

const BoringDisplayContainer = styled.div`
  ${centerContent}
  align-items:stretch;
  flex-wrap: wrap;

  > * {
    flex-basis: 0;
    flex-grow: 1;

    padding: 2rem;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
      flex-basis: 50%;
      padding: 4rem;
    }

    @media screen and (max-width: 600px) {
      padding: 3rem;
    }
  }
`;

const IconContainer = styled(BaseLink)`
  ${centerContent}
  flex-direction: column;

  filter: drop-shadow(1px 1px 3px black);
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const IconText = styled.div`
  text-align: center;
  font-size: 3vh;
  color: black;
`;
