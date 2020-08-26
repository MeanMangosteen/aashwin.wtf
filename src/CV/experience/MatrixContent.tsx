import React from "react";
import styled from "styled-components";
import { centerContent, Bold } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";
import { BaseLink, BaseATag } from "../../utils/helpers";
import { CarouselItem } from "../../utils/HandCrankedCarousel";

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

  b {
    display: contents;
  }
`;

const ReflectionsContainer = styled.div`
  position: relative;
  ${centerContent}
  flex-direction: column;
  color: white;
  margin: 0 auto;
  max-width: 1000px;

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
  margin: 0 auto;
  max-width: 1500px;
  flex-direction: column;
  color: white;
`;

const AchievementsContent = styled.div`
  font-size: 1.5rem;
  ul {
    ${centerContent}
    align-items: stretch;
  }
  li {
    flex-basis: 0;
    flex-grow: 1;

    ${centerContent}
    margin: 1rem;
    list-style: none;
    padding: 1rem;

    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -1rem;
      height: 1px;
      width: 50%;
    }

    &::before {
      left: 50%;
      background: linear-gradient(to right, white 0%, transparent 100%);
    }

    &::after {
      left: 50%;
      background: linear-gradient(to left, white 0%, transparent 100%);
      transform: translateX(-100%);
    }
  }
`;

const MatrixLogo = styled.div`
  ${centerContent}

  filter: drop-shadow(2px 2px 6px grey);

  transition: transform 200ms ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = styled.img``;

const LogoText = styled.div`
  display: inline-block;
  font-family: "Quicksand";
  font-size: 8rem;
  color: #4ceeff;
`;

export const matrixContent = (
  <>
    <StyledCarouselItem>
      <TitleSlide>
        <MatrixLogo
          onClick={() => window.open("https://www.matrix.ai/", "_blank")}
        >
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
            <li>
              <p>
                Setup and started devlopement on a P2P secret sharing app in{" "}
                <Bold>Javascript</Bold>
              </p>
            </li>
            <li>
              <BaseATag
                href="https://matrix.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
              >
                <p>
                  Developed <i>company website</i> using HTML + CSS
                </p>
              </BaseATag>
            </li>
            <li>
              <p>Sole developer on ecommerce app for East Timor</p>
            </li>
            <li>
              <p>Setup codebase, standards, and configuration</p>
            </li>
            <li>
              <p>Used stack: Typescript, React, Node, Postgres</p>
            </li>
            <li>
              <p>
                Implemented custom <Bold>SSR</Bold> solution supporting{" "}
                <Bold>Redux serialisation and hydration</Bold>
              </p>
            </li>
          </ul>
        </AchievementsContent>
      </AchievementsContainer>
    </StyledCarouselItem>
    <StyledCarouselItem>
      <AchievementsContainer>
        <Title>What I've achieved</Title>
        <AchievementsContent>
          <ul>
            <li>
              <p>
                Use of <Bold>React-Redux</Bold> as data store + a store for
                cached APIthe startups were requests
              </p>
            </li>
            <li>
              <p>
                Used <Bold>React Suspense</Bold> for data fetching and error
                handling
              </p>
            </li>
            <li>
              <p>
                Setup and extensive use of build and config tools:{" "}
                <Bold>Webpack, ESlint, Typscript.</Bold>
              </p>
            </li>
            <li>
              <p>Setup of database tables, queries and seed data</p>
            </li>
            <li>
              <p>
                Setup authentication + authorisation flow utilising{" "}
                <Bold>JWTs</Bold>
              </p>
            </li>
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
              Web dev wasn't something I viewed in high regard. It's just HTML +
              CSS + JS, right? No hard problems here.
            </li>
            <li>
              But I've come to realise that there's actually a rich ecosystem
              behind any sohpisticated application.
            </li>
            <li>
              I love the creativity the web allows. All websites start the same.
              A white rectangle. A blank canvas. Now go kiddo, make an
              experience.
            </li>
            <li>
              One of my favourite<sup>*</sup> challenges: I have my imagination
              running wild, and then I have the box model. And somehow I have to
              convince them to be best friends.
            </li>
            <li>
              I like the diversity of the challenges the different layers of the
              stack provide. All of which require a different mode of thinking,
              and the satisfaction of having all the pieces come together to
              have the app dance and dazzle.
            </li>
            <li>
              Being the sole developer, I definitely missed working in a team.
              That being said, the responsibility, and the chance to learn web
              dev from scratch isn't something I would have gotten at many other
              places.
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
