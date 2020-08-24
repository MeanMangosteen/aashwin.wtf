import React from "react";
import styled from "styled-components";
import { CarouselBanner, Banner } from "../../CV/styles";
import { Carousel, CarouselItem } from "../../utils/Carousel";
import MailcraftLogoSVG from "../../images/mailcraft-logo.svg";
import GmailSVG from "../../images/gmail-icon.svg";
import { centerContent } from "../../utils/styles";
import { ShowTextWithStyle, StylishItem } from "../../utils/ShowTextWithStyle";

export const Mailcraft = () => {
  return (
    <CarouselBanner>
      <StyledCarousel running={false}>
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
          <MailcraftBanner>
            <TitleText>
              <MailcraftLogo>
                <Logo src={MailcraftLogoSVG} />
                <LogoText>Mailcraft</LogoText>
              </MailcraftLogo>
            </TitleText>
          </MailcraftBanner>
        </StyledCarouselItem>
      </StyledCarousel>
    </CarouselBanner>
  );
};

const StyledCarousel = styled(Carousel)`
  background: hsla(37, 13%, 72%, 1);
  font-family: "Ubuntu";
`;

const StyledCarouselItem = styled(CarouselItem)`
  /* > * { flex-grow: 1;
  } */
`;

const MailcraftBanner = styled(Banner)`
  position: relative;
  /* background: #e8d6d6; */
  background: #ece3d5;
`;

const TitleText = styled.div`
  font-family: "Ubuntu";
  font-size: 6rem;
  /* -webkit-text-stroke: 3px hsl(0, 44%, 52%); */
  color: #9de7ef;
  font-weight: bold;
  filter: drop-shadow(2px 4px 6px black);
  letter-spacing: 0.5rem;
`;

const MailcraftLogo = styled.div`
  ${centerContent}

  filter: drop-shadow(2px 2px 6px grey);
`;

const Logo = styled.img``;

const LogoText = styled.div`
  display: inline-block;
  font-family: "Quicksand";
  font-size: 8rem;
  color: #e9c5ff;
`;

// =========================

const IntroContainer = styled(ShowTextWithStyle)`
  ${centerContent}
  justify-content: center;
  /* > * {
    flex-basis: 0;
    flex-grow: 1;
  } */
`;

const BeforeAfterContainer = styled(StylishItem)`
  ${centerContent}
  flex-direction: column;
  font-size: 2rem;
  margin: 1rem;
`;

const BeforeContainer = styled(BeforeAfterContainer)`
  /* align-items: flex-end; */
`;
const AfterContainer = styled(BeforeAfterContainer)`
  /* align-items: flex-start; */
`;

const IntroText = styled.div``;

const DisplayCutout = styled.div`
  ${centerContent}
  /* align-items: stretch; */

  background: grey;
  box-shadow: inset 1px 0px 23px 10px #504436;
  border-radius: 8px;
  height: 300px;
  width: 50%;
  margin: 3rem;
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
  /* height: 100%; */
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
