import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner } from "../../CV/styles";
import MailcraftLogoSVG from "../../images/mailcraft-logo.svg";
import GmailSVG from "../../images/gmail-icon.svg";
import { centerContent, hoverGrow } from "../../utils/styles";
import { ShowTextWithStyle, StylishItem } from "../../utils/ShowTextWithStyle";
import { AiFillGithub } from "react-icons/ai";
import {
  HandCrankedCarousel,
  CarouselItem,
} from "../../utils/HandCrankedCarousel";

export const Mailcraft = () => {
  return (
    <CarouselBanner>
      <StyledCarousel>
        <StyledCarouselItem>
          <MailcraftBanner>
            <TitleText>
              <MailcraftLogo>
                <Logo src={MailcraftLogoSVG} />
                <LogoText>Mailcraft</LogoText>
              </MailcraftLogo>
            </TitleText>
          </MailcraftBanner>
        </StyledCarouselItem>
        <StyledCarouselItem>
          <IntroContainer>
            <BeforeContainer>
              <IntroText>Go from this:</IntroText>
              <DisplayCutout>
                <EmailIconContainer>
                  <EmailIcon src={GmailSVG} />
                  <EmailIconBadge>9,999</EmailIconBadge>
                </EmailIconContainer>
              </DisplayCutout>
            </BeforeContainer>
            <AfterContainer>
              <IntroText>To this:</IntroText>
              <DisplayCutout>
                <EmailIconContainer>
                  <EmailIcon src={GmailSVG}></EmailIcon>
                  <EmailIconHalo />
                </EmailIconContainer>
              </DisplayCutout>
            </AfterContainer>
          </IntroContainer>
        </StyledCarouselItem>
        <StyledCarouselItem>
          <DemoContainer>
            <VideoTitle>Demo Time!</VideoTitle>
            <VideoContainer>
              <StyledVideo controls>
                <source
                  src="https://s3.ap-southeast-2.amazonaws.com/aashwin.wtf/mailcraft-demo-webm.webm"
                  type="video/webm"
                ></source>
              </StyledVideo>
            </VideoContainer>
          </DemoContainer>
        </StyledCarouselItem>
        <StyledCarouselItem>
          <OutroContainer>
            <VisitMailcraftContainer>
              <VisitMailcraftText>Go to Mailcraft</VisitMailcraftText>
              <MailcraftLogoContainer
                onClick={() =>
                  window.open("https://mailcraft.herokuapp.com/", "_blank")
                }
              >
                <Logo src={MailcraftLogoSVG} />
              </MailcraftLogoContainer>
            </VisitMailcraftContainer>
            <VisitGithubContainer>
              <VisitGithubText>Find this on github</VisitGithubText>
              <GithubIconContainer
                onClick={() =>
                  window.open(
                    "https://github.com/MeanMangosteen/mailcraft",
                    "_blank"
                  )
                }
              >
                <GithubIcon />
              </GithubIconContainer>
            </VisitGithubContainer>
          </OutroContainer>
        </StyledCarouselItem>
      </StyledCarousel>
    </CarouselBanner>
  );
};

const DemoContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;
const VideoTitle = styled.div`
  font-size: 3rem;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;
const VideoContainer = styled.div`
  flex-grow: 1;
  ${centerContent}
  margin: 3rem;
  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;
const StyledVideo = styled.video`
  height: auto;
  width: 100%;

  object-fit: contain;
  filter: drop-shadow(2px 4px 6px black);
`;

const OutroContainer = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: auto;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;

  font-size: 1rem;
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.4rem;
  }
`;

const VisitMailcraftContainer = styled.div`
  ${centerContent}
  flex-direction: column;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }

`;

const MailcraftLogoContainer = styled.div`
  ${centerContent}
  filter: drop-shadow(2px 2px 6px grey);
  margin: 1rem;
  height: 50%;
  ${hoverGrow}
`;

const VisitMailcraftText = styled.div`
  ${centerContent}
  font-size: 5.5em;
`;

const VisitGithubContainer = styled.div`
  ${centerContent}
  align-items: stretch;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
`;

const VisitGithubText = styled.div`
  ${centerContent}
  font-size: 3.5em;
`;

const GithubIconContainer = styled.div`
  ${centerContent}
  height: 15%;
`;

const GithubIcon = styled(AiFillGithub)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  object-fit: contain;
  filter: drop-shadow(2px 2px 6px grey);
  ${hoverGrow}
  color: black;
`;

const StyledCarousel = styled(HandCrankedCarousel)`
  background: #ece3d5;
  font-family: "Ubuntu";
  color: #685f51;
`;

const StyledCarouselItem = styled(CarouselItem)``;

const MailcraftBanner = styled(Banner)`
  position: relative;
  /* background: #e8d6d6; */
  background: #ece3d5;
`;

const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  color: #9de7ef;
  font-weight: bold;
  filter: drop-shadow(2px 4px 6px black);
  letter-spacing: 0.5rem;

  height: 100%;
  width: 100%;
`;

const MailcraftLogo = styled.div`
  ${centerContent}
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
  filter: drop-shadow(2px 2px 6px grey);
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  height: auto;
  width: 50%;
  object-fit: contain;
`;

const LogoText = styled.div`
  display: inline-block;
  font-family: "Quicksand";
  font-size: 8rem;
  color: #e9c5ff;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 350px) {
    font-size: 3rem;
  }
`;

// =========================

const IntroContainer = styled(ShowTextWithStyle)`
  ${centerContent}
  justify-content: center;
  align-items: stretch;

  height: 100%;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    > * {
      flex-basis: 0;
      flex-grow: 1;
    }
  }
`;

const BeforeAfterContainer = styled(StylishItem)`
  ${centerContent}
  flex-direction: column;
  font-size: 2rem;
  margin: 1rem;
`;

const BeforeContainer = styled(BeforeAfterContainer)``;
const AfterContainer = styled(BeforeAfterContainer)``;

const IntroText = styled.div`
  color: #685f51;
  font-size: 3rem;
  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;

const DisplayCutout = styled.div`
  ${centerContent}

  background: grey;
  box-shadow: inset 1px 0px 23px 10px #504436, 0px 1px 34px 6px #a5922d,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 8px;
  height: 30%;
  width: 50%;
  margin: 3rem;
  border: 5px solid #e0bf00;

  @media screen and (max-width: 1100px) {
    flex-grow: 1;
  }

  @media screen and (max-width: 550px) {
    width: auto;
    margin: 3rem 0;
  }
`;

const EmailIconContainer = styled.div`
  position: relative;
  ${centerContent}
  filter: drop-shadow(0px 4px 6px #464646);
  width: 23%;
`;

const EmailIconBadge = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translate(-50%, 00%);
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  filter: drop-shadow(0px 0px 1px #b2392f);
  border-radius: 15px;
  background: #fa2805;
  font-weight: bold;
`;

const EmailIcon = styled.img`
  width: 100%;
  flex-grow: 1;

  object-fit: contain;
`;

const EmailIconHalo = styled.div`
  position: absolute;
  left: 0;
  top: -10px;
  width: 100%;
  height: 10%;
  border: 2px solid blanchedalmond;
  border-radius: 100%;
  box-shadow: 1px 1px 12px 1px #ecdc90;
`;
