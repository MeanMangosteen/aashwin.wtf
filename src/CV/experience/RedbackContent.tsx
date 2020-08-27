import React from "react";
import styled from "styled-components";
import {
  centerContent,
  centerAbsolutely,
  hoverGrow,
  Bold,
} from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";
import { CarouselItem } from "../../utils/HandCrankedCarousel";

const StyledExperienceInfo = styled(ExperienceInfo)`
  filter: brightness(3);
`;
const StyledCarouselItem = styled(CarouselItem)`
  color: white;
  font-family: "Ubuntu";
  background: black;
`;

const ReflectionsContainer = styled.div`
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
  -webkit-text-stroke: 1px black;
  margin-bottom: 3rem;
`;

const ReflectionsContent = styled.div`
  margin: 1rem 3rem;
  font-size: 1.4rem;
`;

const TitleImage = styled.div`
  ${centerAbsolutely}
  height: 50%;
  width: 100%;

  background-image: url("https://uploads-ssl.webflow.com/5ec8ac71107e46be6b1f9449/5ec8b77a107e46318c1fb3aa_Redback_Racing_White_Transparent_Numberless.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  transition: transform 200ms ease-out;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
const TitleSlide = styled.div`
  position: relative;
  background: black;
  height: 100%;
  width: 100%;
`;

const AchievementsContainer = styled.div`
  ${centerContent}
  margin: 0 auto;
  max-width: 1500px;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const AchievementsContent = styled.div`
  font-size: 1.8rem;
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

    /* border: 2px solid white; */
  }
`;

export const redbackContent = (
  <React.Fragment>
    <StyledCarouselItem>
      <TitleSlide>
        <TitleImage
          onClick={() =>
            window.open("https://www.redbackracing.com/", "_blank")
          }
        />
        <StyledExperienceInfo
          position="Department Leader - Data Acquisition"
          location="UNSW Kensington"
          time="Jul 2016 - Jun 2018"
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
                Managed team of ~10 engineers using <Bold>AGILE</Bold> software
                development
              </p>
            </li>
            <li>
              <p>
                Extensive development on datalogger and telemetry application
                using <Bold>C++</Bold>
              </p>
            </li>
            <li>
              <p>
                Used Zynq-7000 (FPGA) SoC and Xilinx development tools: Vivado,
                SDK, Petalinux
              </p>
            </li>
            <li>
              <p>
                Interfaced with various hardware modules, sensors and
                interaction with automotive ECU via CAN bus
              </p>
            </li>
            <li>
              <p>
                Contributed to wireless telemetry flow writing{" "}
                <Bold>Python</Bold> cloud servers
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
            <li>
              It could be argued that this isn't <i>real</i> experience. I think
              otherwise.
              {/* It's been character
                defining, and exposed me to wild new worlds: technically,
                profressionally, and at times spiritually. */}
            </li>
            <li>
              It was the first of many things. The first time I:
              <ul>
                <li>
                  Applied my education on something <Bold>real</Bold> and{" "}
                  <Bold>significant</Bold>.
                  {/* This isn't something that's blindly
                  marked then forgotten. There are so many stakeholders who
                  genuinely want the car complete and running its best. */}
                  {/* My actions and efforts had tangible consequences,
                    they didn't simply change a number I got at the end. */}
                </li>
                <li>
                  Belonged to something that can be called{" "}
                  <Bold>organisation</Bold>.
                  {/* Teams. Teams within teams. People
                  from <Bold>varying disciplines</Bold>. All motivated, driven
                  and working towards a common goal. Before this, I thought{" "}
                  <i>teamwork</i> meant working on a group project. Group projects don't have a treasury. */}
                </li>
                <li>
                  Lead a large(ish) team.
                  {/* This was arguably the most challeging
                  facet. This was a happening time for me + no idea what I was
                  doing, so a learning curve here. We used AGILE but in this
                  case the method also had an extra
                  <i>FR</i> at the front. I got better and really enjoyed this
                  later down the track. */}
                  {/* But I learned so, so much. Managing a
                    team is eventually something I become **a lot** better at
                    and really enjoyed. */}
                </li>
              </ul>
            </li>
            <li>
              <Bold>Shoot for the stars, but start from ground zero</Bold>
              {/* - I
              set targets and used technologies that we had{" "}
              <Bold>absolutely</Bold> no right to. It's one thing to be
              optimistic, is another to embark on a death march. Know where you
              stand, and use what you know. <Bold>Set a base, then grow.</Bold> */}
              {/* Green and starry-eyed I was, we set targets and used
                technologies that we had **absolutely** no right to. */}
            </li>
            <li>
              <Bold>You leave a legacy for all the good, and the bad.</Bold>
              {/* - I
              revisited my department years after which turned out to be a super
              humbling experience - seeing fresh faces and how our projects had
              evolved. I saw work that I was proud of, and monstrocities I wish
              no person would ever see, both still integrated within the system.{" "} */}
            </li>
          </ul>
        </ReflectionsContent>
      </ReflectionsContainer>
    </StyledCarouselItem>
  </React.Fragment>
);
