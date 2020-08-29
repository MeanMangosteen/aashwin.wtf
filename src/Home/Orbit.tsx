import React from "react";
import { SizeMe } from "react-sizeme";
import styled, { keyframes, css } from "styled-components";
import { centerContent } from "../utils/styles";
import { BaseLink } from "../utils/helpers";

type OrbitProps = {
  // parentDim?: { height: number | null; width: number | null };
  orbitShell: number; // scale of orbit wrt parent
  orbitSpeed: number; // Nominal, and unitless
  iconSrc: string;
  title: string;
  path: string;
  iconScale?: number;
  className?: string;
};

const Orbit = ({
  orbitShell,
  iconSrc,
  orbitSpeed,
  title,
  path,
  iconScale = 1,
  className = "",
}: OrbitProps) => {
  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <OrbitContainer orbitShell={orbitShell} className={className}>
          <OrbitPath size={size} orbitSpeed={orbitSpeed}>
            <OrbitIconContianer>
              <OrbitIconWrapper size={size} orbitSpeed={orbitSpeed} to={path}>
                <OrbitIconSuperWrapper>
                  <StyledIcon src={iconSrc} iconScale={iconScale} />
                </OrbitIconSuperWrapper>
                {/* <StyledIcon src={iconSrc} size={size} orbitSpeed={orbitSpeed} /> */}
                <IconText>{title}</IconText>
              </OrbitIconWrapper>
            </OrbitIconContianer>
          </OrbitPath>
        </OrbitContainer>
      )}
    </SizeMe>
  );
};

const FatOrbitPathFrames = keyframes`
from {
    transform: scale(1.2, 1) rotate(0deg);
}
  
  to {
    transform: scale(1.2, 1) rotate(360deg) ;
  }

`;

const TallOrbitPathFrames = keyframes`
from {

    transform: scale(1, 1.2) rotate(0deg);
}
  
  to {
    transform: scale(1, 1.2) rotate(360deg) ;
  }
`;

const animateOrbitPath = (height: number, width: number) => {
  return keyframes`
from {

    transform: scale(${Math.max(Math.min(width / height, 1.3), 1)}, ${Math.max(
    1,
    height / width
  )}) rotate(0deg);
}
  
  to {
    transform: scale(${Math.max(Math.min(width / height, 1.3), 1)}, ${Math.max(
    1,
    height / width
  )}) rotate(360deg) ;
  }
`;
};

const animateOrbitIcon = (height: number, width: number) => {
  return keyframes`
from {

    transform: rotate(0deg) scale(${Math.min(
      Math.max(0.7, height / width),
      1
    )} ,${Math.min(1, width / height)} ) ;
}
  
  to {
    transform: rotate(-360deg) scale(${Math.min(
      Math.max(0.7, height / width),
      1
    )}, ${Math.min(1, width / height)}) ;
  }
  `;
};
const OrbitContainer = styled.div<{ orbitShell: number }>`
  ${centerContent}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* [min-size] + (([max-size] - [min-size])  / [num orbits] * (orbitShell - 1)) */
  width: ${({ orbitShell }) => 40 + ((95 - 40) / 3) * (orbitShell - 1)}vw;
  height: ${({ orbitShell }) => 40 + ((95 - 40) / 3) * (orbitShell - 1)}vh;

  max-height: 95vh;
  max-width: 100vw;
  pointer-events: none;
`;

const OrbitPath = styled.div<{ size: any; orbitSpeed: number }>`
  /* z-index: 2; */
  --height: ${({ size }) => size.height};
  --width: ${({ size }) => size.width};
  --orbit-type: ${({ size }) => (size.width > size.height ? "fat" : "tall")};

  --size: ${({ size }) =>
    size.width > size.height ? size.height : size.width}px;

  /* Make the orbit a cirlce */
  width: var(--size);
  height: var(--size);

  /* This animation will ellipsify it according to the screen dimensions */
  animation: ${({ size, orbitSpeed }) =>
    css`
      ${animateOrbitPath(size.height, size.width)} infinite ${12 *
      (1 / orbitSpeed)}s linear
    `};

  &:hover {
    animation-play-state: paused;
  }
  border: 2px #4a437f dashed;
  border-radius: 100%;
`;

const OrbitIconContianer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;

  justify-content: center;
  transform: translate(-50%, -50%);
`;

// const OrbitIconWrapper = styled.div<{ size: any; orbitSpeed: number }>``;
const OrbitIconWrapper = styled(BaseLink)<{ size: any; orbitSpeed: number }>`
  ${centerContent}
  flex-direction: column;
  --time: ${({ orbitSpeed }) => `${12 * (1 / orbitSpeed)}`};
  transform: scale(0.8, 1);
  animation: ${({ size, orbitSpeed }) =>
    css`
      ${animateOrbitIcon(size.height, size.width)} infinite ${12 *
      (1 / orbitSpeed)}s linear
    `};

  color: black;
  pointer-events: all;
  ${OrbitPath}:hover & {
    animation-play-state: paused;
  }
`;
const OrbitIconSuperWrapper = styled.div`
  display: flex;
`;

const StyledIcon = styled.img<{ iconScale: number }>`
  object-fit: contain;
  flex: 1;
  width: 6vw;
  height: 6vh;
  --baseScale: ${(props) => props.iconScale};
  transform: scale(var(--baseScale));
  filter: drop-shadow(2px 2px 3px black);

  ${OrbitIconWrapper}:hover & {
    transform: scale(calc(var(--baseScale) * 1.2));
  }
  transition: transform 200ms ease-in-out;

  @media screen and (max-width: 1100px) {
    width: 7vw;
    height: 7vh;
  }
`;

const IconText = styled.div`
  font-size: 2.2vw;
  ${OrbitIconWrapper}:hover & {
    transform: scale(1.2);
  }
  transition: transform 200ms ease-in-out;

  @media screen and (max-width: 1100px) {
    font-size: 3vw;
  }
`;

export { Orbit, StyledIcon as OrbitIcon };
