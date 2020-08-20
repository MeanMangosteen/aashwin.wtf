import React from "react";
import styled from "styled-components";
import { CarouselItem } from "../../utils/Carousel";
import { centerContent, centerAbsolutely } from "../../utils/styles";
import { ExperienceInfo } from "./ExperienceInfo";

export const RedbackContent = () => {
  return (
    <React.Fragment>
      <StyledCarouselItem>
        <TitleSlide>
          <StyledExperienceInfo
            position="Data Acquisition Leader"
            location="Kensington, NSW"
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
                Managed team of ~10 engineersusing Agile software development
              </li>
              <li>
                Extensive development on datalogger and telemetry application
                using C++
              </li>
              <li>
                Used Zynq-7000 (FPGA) SoC and Xilinx development tools: Vivado,
                SDK, Petalinux
              </li>
              <li>
                Interfaced with various hardware modules, sensors and
                interaction with automotive ECU via CAN bus
              </li>
              <li>
                Contributed to wireless telemetry flow writing Python cloud
                servers
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
                It could be argued that this isn't 'real' experience, since it
                wasn't actually a job. But if we're actually talking about
                'experience' then nothing hits home harder. It's been character
                defining, and exposed me to wild new worlds: technically,
                profressionally, and at times spiritually.
              </li>
              <li>
                It made for the first of many things:
                <ul>
                  <li>
                    The first time I was applying my education on something
                    **real** and **signifacant**. This isn't something that's
                    blindly marked then forgotten. There are so many
                    stakeholders who genuinely want the car complete and running
                    its best. My actions and efforts had tangible consequences,
                    they didn't simply change a number I got at the end.
                  </li>
                  <li>
                    The first time I was part of something that can be called
                    organisation. Teams. Teams within teams. People from varying
                    disciplines. All motivated, driven and working towards a
                    common goal. Before this, I thought 'teamwork' meant working
                    on a group project. Ha. Ha ha. Group projects don't have a
                    treasury.
                  </li>
                  <li>
                    The first time leading a large(ish) team. Wow. This was
                    arguably the most challeging facet. I had a lot going on
                    outside this project + no idea what I was doing, so a
                    learning curve here. We used AGILE but in this case the
                    method also had an extra 'FR' at the front. But I learned
                    so, so much. Managing a team is eventually something I
                    become **a lot** better at and really enjoyed.
                  </li>
                </ul>
              </li>
              <li>
                Shoot for the stars, but start from ground zero. Green and
                starry-eyed I was, we set targets and used technologies that we
                had **absolutely** no right to. It one thing to be optimistic,
                is another to set out on a death march. Know where you stand,
                use what you know. Set a base, then grow, and grow, and grow.
              </li>
              <li>
                I revisited the team, years after I had left, and had a long
                sit-down with former department which turned out to be a super
                humbling experience. I saw fresh faces and how far our projects
                had evolved. I saw things that I worked on playing a pivotal
                role and things I worked on I wished no person would ever see
                also as part of that system. Really shows how you leave a legacy
                for all the good and bad.
              </li>
            </ul>
          </ReflectionsContent>
        </ReflectionsContainer>
      </StyledCarouselItem>
    </React.Fragment>
  );
};

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
  font-size: 1.2rem;
`;

const TitleSlide = styled.div`
  position: relative;
  background: black;
  height: 100%;
  width: 100%;

  &::after {
    content: "";
    ${centerAbsolutely}
    height: 50%;
    width: 100%;

    background-image: url("https://uploads-ssl.webflow.com/5ec8ac71107e46be6b1f9449/5ec8b77a107e46318c1fb3aa_Redback_Racing_White_Transparent_Numberless.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const AchievementsContainer = styled.div`
  ${centerContent}
  max-width: 1500px;
  flex-direction: column;
  color: white;
  text-align: center;
`;

const AchievementsContent = styled.div`
  font-size: 1.8rem;
  ul {
    ${centerContent}
  }
  li {
    margin: 1rem;
    list-style: none;
  }
`;
