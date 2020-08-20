import React from "react";
import styled from "styled-components";
import { CarouselItem } from "../../utils/Carousel";
import { centerContent } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";

export const MatrixContent = () => {
  return (
    <>
      <StyledCarouselItem>
        <TitleSlide>
          <MatrixLogo>
            <Logo src="https://matrix.ai/assets/images/matrix-logo.png" />
            <LogoText>MATRIX</LogoText>
          </MatrixLogo>
          <StyledExperienceInfo
            position="Software/Web Developer"
            location="Sydney CBD"
            time="Aug 2018 - March 2020"
          />
        </TitleSlide>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <AchievementsContainer>
          <Title>What I've achieved</Title>
          <AchievementsContent>
            <ul>
              {/* <li>Sole developer on ecommerce app for east timor.</li> */}
              <li>Setup codebase, standards, and configuration.</li>
              <li> Used stack: Typescript, React, Node, Postgres</li>
              <li>
                Implemented hand-crafted server side rendering solution
                supporting redux serialisation and hydration
              </li>
              <li>
                Use of React-Redux as data store + a store for cached requests
              </li>
            </ul>
          </AchievementsContent>
        </AchievementsContainer>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <AchievementsContainer>
          <Title>What I've achieved (continued)</Title>
          <AchievementsContent>
            <ul>
              <li>Used React Suspense for data fetching and Error handling</li>
              <li>
                Setup and extensive use of build and config tools: Webpack,
                ESlint, Typscript.
              </li>
              <li>Setup of database tables, queries and seed data</li>
              <li> Setup authentication + authorisation flow utilising JWTs</li>
              <li> Efficent CSS animations</li>
            </ul>
          </AchievementsContent>
        </AchievementsContainer>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <ReflectionsContainer>
          <Title>Reflections</Title>
          <ReflectionsContent>
            <ul>
              <li>I never thought I'd be a web guy, but here I am.</li>
              <li>
                Web dev wasn't something I viewed in high regard. It's just HTML
                + CSS + JS, right? No hard problems here.
              </li>
              <li>
                But I've come to realise that there's actually a rich ecosystem
                behind any sohpisticated application.
              </li>
              <li>Most of all, I love the creativity it allows</li>
              <li>
                All websites start the same. A white rectangle. A blank canvas.
                Now go kiddo, make an experience.
              </li>
              <li>
                And here in lies one of my favourite<sup>*</sup> challenges. I
                have my imagination running wild, and then I have the box model.
                And somehow I have to convince them to be best friends.
              </li>
              <li>
                The diversity of the challenges the different layers of the
                stack provide, which finally come together to make a living
                website that dances and dazzles.
              </li>
              <li>
                Being the sole developer, I definitely missed working in a team.
                That being said, the responsibility, accountability, and the
                chance to learn web dev from scratch isn't something I would
                have gotten at many other places.
              </li>
            </ul>
          </ReflectionsContent>
          <TsandCsText>
            <sup>* Terms and Conditions apply</sup>
          </TsandCsText>
        </ReflectionsContainer>
      </StyledCarouselItem>
    </>
  );
};

const StyledExperienceInfo = styled(ExperienceInfo)`
  filter: brightness(3.5);
`;

const TsandCsText = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  transform: translate(-100%, 100%);
`;

const StyledCarouselItem = styled(CarouselItem)`
  color: white;
  font-family: "Ubuntu";
  background: black;
  background: #02243e;
`;

const ReflectionsContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  color: white;
  max-width: 1000px;
  filter: drop-shadow(2px 2px 3px grey);

  li {
    margin: 1rem;
  }
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 3rem;
  filter: drop-shadow(2px 2px 3px grey);
`;

const ReflectionsContent = styled.div`
  margin: 1rem 3rem;
  font-size: 1.3rem;
`;

const TitleSlide = styled.div`
  position: relative;
  ${centerContent}
  background: #02243e;
  height: 100%;
  width: 100%;
`;

const AchievementsContainer = styled.div`
  ${centerContent}
  text-align: center;
  max-width: 1500px;
  flex-direction: column;
  color: white;
  filter: drop-shadow(2px 2px 3px grey);
`;

const AchievementsContent = styled.div`
  font-size: 1.8rem;
  ul {
    ${centerContent}
  }
  li {
    margin: 1rem;
    list-style: none;
    flex-basis: 0;
    flex-grow: 1;
  }
`;

const MatrixLogo = styled.div`
  ${centerContent}

  filter: drop-shadow(2px 2px 6px grey);
`;

const Logo = styled.img``;

const LogoText = styled.div`
  display: inline-block;
  font-family: "Quicksand";
  font-size: 8rem;
  color: #4ceeff;
`;
