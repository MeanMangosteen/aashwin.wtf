import React from "react";
import styled, { keyframes, css } from "styled-components";

export const ProgressBar = ({
  progress,
  total,
  className = "",
}: {
  progress: number;
  total: number;
  className?: string;
}) => {
  return (
    <ProgressBarContainer className={className}>
      <ProgressPowa progress={progress} />
      <ProgressRemaining progress={progress} total={total} />
      <ProgressBarMask />
      {/* <ProgressTextWrapper progress={progress} total={total!}>
        <ProgressText>{`${total! - progress} to go!`}</ProgressText>
      </ProgressTextWrapper>
      <TotalText>{total}</TotalText> */}
    </ProgressBarContainer>
  );
};

const ProgressTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  transform: ${({ progress, total }: { progress: number; total: number }) =>
    `translate3d(${(progress / total) * 100}%, 0, 0)`};
  transition: transform 0.3s ease-out;
`;

const TotalText = styled.div`
  position: absolute;

  font-size: 3rem;

  /* Align text past the edge and in the middle */
  right: 0;
  top: 50%;
  transform: translate3d(100%, -50%, 0);

  /* Give the man some space here */
  padding-left: 2rem;
  box-sizing: border-box;
`;

const ProgressText = styled.div`
  position: absolute;
  font-size: 2rem;
  top: -2px;
  left: 0;
  transform: translate3d(-50%, -100%, 0);
  padding-bottom: 2rem;
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    right: 50%;

    width: 1px;
    height: 30%;
    /* transform: translateY(100%); */
  }

  &::before {
    bottom: 0;
    background: linear-gradient(to top, #a7a6a6 0%, transparent 100%);
  }
`;

const ProgressLife = keyframes`
  from { 
    transform: translateX(-40%);
  }

  to { 
    transform: translateX(0%);
  }

`;
const ProgressPowa = styled.div<{ progress: number }>`
  height: 100%;
  width: 200%;
  position: absolute;
  z-index: -2;

  animation: ${(props) =>
    css`
      ${ProgressLife} ${((131 - props.progress) / 100) *
      1.8}s linear infinite running
    `};
  will-change: transform;
  /* background: repeating-linear-gradient(
    120deg,
    hsl(0, 100%, 50%) 0%,
    hsl(43, 100%, 50%) 10%,
    hsla(64, 78%, 50%, 1) 20%,
    hsl(43, 100%, 50%) 40%,
    hsl(0, 100%, 50%) 50%
  ); */
  background: repeating-linear-gradient(
    120deg,
    rgb(255, 60, 0) 0%,
    rgb(255, 145, 0) 10%,
    rgb(255, 169, 0) 20%,
    rgb(255, 169, 0) 30%,
    rgb(255, 48, 0) 40%
  );
  /* Blend the colours */
  filter: ${(props) =>
    `hue-rotate(${
      ((90 - props.progress) / 100) * (-500 + props.progress * 1.7)
    }deg) blur(10px) hue-rotate(-90deg)`};
`;

const ProgressRemaining = styled.div`
  /** This is the progress 'remaining' bar. It's grey  */
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -2;

  background: grey;
  box-shadow: inset 1px 0px 23px 10px #3a3a3a;

  transform: ${({ progress, total }: { progress: any; total: any }) =>
    `translate3d(${(progress / total) * 100}%, 0, 0)`};
  transition: transform 0.3s ease-out;
`;

const ProgressBarMask = styled.div`
  /** 
  This serves to create a mask around the progress bar.
  It masks the sliding PROGRESS POWA on the x-axis.
  It masks the colour bleed of the blur on PROGRESS POWA on the y-axis.
  */
  position: absolute;
  height: 100%;
  width: 100%;
  /* box-shadow: -400px 0px 3px 100vw #434d65, 400px 0px 3px 100vw #434d65; */
  box-shadow: -400px 0px 3px 100vw #3a293d, 400px 0px 3px 100vw #3a293d;
  z-index: -1;
  border-radius: 5px;
`;

const ProgressBarContainer = styled.div`
  flex-basis: 8%;
  width: 50%;
  border-radius: 5px;
  position: relative;

  box-shadow: 0px 10px 13px -7px #000000,
    inset 1px 0px 23px 10px rgba(58, 58, 58, 0);
`;
