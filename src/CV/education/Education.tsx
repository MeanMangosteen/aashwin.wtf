import React, { useEffect } from "react";
import styled from "styled-components";
import {
  centerContent,
  CSSDividerBottom,
  centerAbsolutely,
} from "../../utils/styles";
import {
  TitleText,
  CarouselBanner,
  Banner,
  OpeningSlide,
  OpeningImage,
} from "../styles";
import { Bold } from "../../utils/styles";
import {
  HandCrankedCarousel,
  CarouselItem,
} from "../../utils/HandCrankedCarousel";
import { useInView } from "react-intersection-observer";

type EducationProps = {
  onFinish: () => void;
  id: string;
  stage: string;
};
export const Education = ({ onFinish, id, stage }: EducationProps) => {
  const [ref, inView, entry] = useInView({
    threshold: [0, 0.9],
  });

  // useEffect(
  //   () => {
  //     const interval = setInterval(() => {
  //       console.log("interval", inView);
  //       if (inView) {
  //         console.log("in veiw vewi!");
  //         onFinish();
  //       }
  //     }, 250);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   },
  //   [] // empty dependency array
  // );
  useEffect(() => {
    if (inView) {
      onFinish();
      console.log("in veiw vewi!");
      setTimeout(() => {
        onFinish();
        console.log("fired");
      }, 200);
      setTimeout(() => {
        onFinish();
        console.log("fired");
      }, 1000);
    }
  }, [inView, onFinish]);
  return (
    <CarouselBanner>
      <StyledCarouselWow>
        <CarouselItem>
          <EducationBanner>
            <TitleText>Education</TitleText>
          </EducationBanner>
        </CarouselItem>
        <CarouselItem>
          <OpeningSlide>
            <TitleImage />
            <ExperienceInfo />
          </OpeningSlide>
        </CarouselItem>
        <CarouselItem>
          <FavoriteSubjectsContainer>
            <FavSubjectsTitle>Favorite Subjects</FavSubjectsTitle>
            <FavSubjectsContent>
              <SubjectContainer>
                <SubjectTitle>Operating Systems</SubjectTitle>
                <SubjectContent>
                  <p>
                    A deep dive into the <Bold>Linux kernel</Bold>: imple-mented
                    concurrency primitives, memory management, system calls, and
                    file system modules.
                  </p>
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Algorithms</SubjectTitle>
                <SubjectContent>
                  <p>
                    Study and design of algorithms considering{" "}
                    <Bold>computational complexity</Bold> using a variety of
                    techniques and data structures.
                  </p>
                </SubjectContent>
              </SubjectContainer>
              <SubjectContainer>
                <SubjectTitle>Computer Networks</SubjectTitle>
                <SubjectContent>
                  <p>
                    Study of network stacks, various protocols{" "}
                    <Bold>(TCP, UDP)</Bold>, routing and the architecture of the
                    Internet
                  </p>
                </SubjectContent>
              </SubjectContainer>
            </FavSubjectsContent>
          </FavoriteSubjectsContainer>
        </CarouselItem>
        <CarouselItem>
          <EducationBanner ref={ref} />
        </CarouselItem>
      </StyledCarouselWow>
    </CarouselBanner>
  );
};

const ScrollWatcher = styled.div`
  width: 10%;
  height: 100px;
`;

const StyledCarouselWow = styled(HandCrankedCarousel)`
  background: #ffdc00;
`;

const TitleImage = styled(OpeningImage)`
  background-image: url("https://warrane.unsw.edu.au/img/UNSW.png");
`;

const ExperienceInfo = () => {
  return (
    <ExperienceInfoContainer>
      <DegreeText>Computer Science</DegreeText>
      <TimePeriod>2015-2019</TimePeriod>
    </ExperienceInfoContainer>
  );
};

const ExperienceInfoContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  font-family: "Ubuntu";

  font-size: 1rem;

  @media screen and (max-width: 500px) {
    transform: translate(-50%, 0%);
  }
`;

const DegreeText = styled.div`
  font-size: 4em;
  color: #3a3a3a;
  text-align: center;
  margin-bottom: 1em;

  @media screen and (max-width: 1050px), screen and (max-height: 1200px) {
    font-size: 3rem;
  }
`;
const TimePeriod = styled.div`
  font-size: 1.5em;
  font-style: italic;
  color: #3a3a3a;
`;

export const FavoriteSubjectsContainer = styled.div`
  ${centerContent}
  @media screen and (min-width: 1000px) {
    max-width: 100vw;
    max-height: 100vh;
    height: 100%;
    width: 100%;
  }
  /* height: 100%;
  width: 100%; */
  margin: 0 auto;
  color: #3c3c3c;
  max-width: 1400px;
  font-family: "Ubuntu";
  flex-direction: column;
  @media screen and (max-width: 1100px) {
    font-size: 0.8rem;
  }
  /* > * {
    flex-basis: 0;
    flex-grow: 1;
  } */
`;
export const FavSubjectsTitle = styled.div`
  ${centerContent}
  font-size: 4em;
  padding: 1rem;
  margin-bottom: 3em;
  color: #fff9ef;
  text-align: center;
  filter: drop-shadow(2px 4px 6px black);
  @media screen and (max-width: 1100px) {
    margin-bottom: 2em;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
    @media screen and (max-width: 950px) {
      flex-direction: column;
    }
    padding: 1rem;
  }

  @media screen and (max-height: 870px) {
    margin-bottom: 1em;
  }
`;
export const FavSubjectsContent = styled.div`
  ${centerContent}
  align-items: start;
  margin: 1em 3em;
  > div {
    flex-basis: 0;
    flex-grow: 1;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    margin: 1rem;
  }
`;
export const SubjectContainer = styled.div`
  ${centerContent}
  flex-direction: column;
  margin: 1em;
`;

export const SubjectTitle = styled.div`
  ${centerContent}
  flex-direction: column;
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  position: relative;
  ${CSSDividerBottom({ width: "80%", iHaveSetRelativePosition: true })}
`;
export const SubjectContent = styled.div`
  padding: 1em;
  font-size: 1.5em;
  li {
    margin: 1em 0;
  }

  ul {
    padding: 0;
  }
`;

const EducationBanner = styled(Banner)`
  position: relative;
  /* background: #e8d6d6; */
  background: hsla(12, 190%, 87%, 1);
`;
