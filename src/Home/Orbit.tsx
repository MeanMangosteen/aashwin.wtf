import React from "react";
import { SizeMe } from "react-sizeme";
import styled, { keyframes, css } from "styled-components";
import { centerContent } from "../utils/styles";
import { BaseLink } from "../utils/helpers";

type OrbitProps = {
  parentDim?: { height: number | null; width: number | null };
  orbitSize: number; // scale of orbit wrt parent
  orbitSpeed: number; // Nominal, and unitless
  iconSrc: string;
  title: string;
  path: string;
};

export const Orbit = ({
  orbitSize,
  iconSrc,
  orbitSpeed,
  title,
  path,
}: OrbitProps) => {
  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <OrbitContainer orbitSize={orbitSize}>
          <OrbitPath size={size} orbitSpeed={orbitSpeed}>
            <OrbitIconContianer>
              <OrbitIconWrapper size={size} orbitSpeed={orbitSpeed} to={path}>
                <OrbitIconSuperWrapper>
                  <StyledIcon src={iconSrc} />
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

    transform: scale(${width / height}, ${Math.max(
    1,
    height / width
  )}) rotate(0deg);
}
  
  to {
    transform: scale(${width / height}, ${Math.max(
    1,
    height / width
  )}) rotate(360deg) ;
  }
`;
};

const OrbitContainer = styled.div<{ orbitSize: number }>`
  ${centerContent}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ orbitSize }) => orbitSize * 100}%;
  height: ${({ orbitSize }) => orbitSize * 100}%;

  max-height: 100vh;
  max-width: 100vw;
`;

const OrbitPath = styled.div<{ size: any; orbitSpeed: number }>`
  /* Make the orbit a circle */
  width: var(--size);
  height: var(--size);

  /* Make the orbit an ellipse */
  --height: ${({ size }) => size.height};
  --width: ${({ size }) => size.width};
  --orbit-type: ${({ size }) => (size.width > size.height ? "fat" : "tall")};

  --size: ${({ size }) =>
    size.width > size.height ? size.height : size.width}px;
  transform: scale(1.2, 1) rotate(360deg);
  /* animation: ${({ size, orbitSpeed }) =>
    size.width > size.height
      ? css`
          ${FatOrbitPathFrames} infinite ${12 * (1 / orbitSpeed)}s linear

        `
      : css`
          ${TallOrbitPathFrames} infinite ${12 * (1 / orbitSpeed)}s linear
        `}; */
  animation: ${({ size, orbitSpeed }) =>
    css`${animateOrbitPath(size.height, size.width)} infinite ${
      12 * (1 / orbitSpeed)
    }s linear`};

  border: 2px #4a437f dashed;
  border-radius: 100%;
`;

const animateOrbitIcon = (height: number, width: number) => {
  return keyframes`
from {

    transform: rotate(0deg) scale(${height / width},${Math.min(
    1,
    width / height
  )} ) ;
}
  
  to {
    transform: rotate(-360deg) scale(${height / width}, ${Math.min(
    1,
    width / height
  )}) ;
  }
  `;
};

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
    css`${animateOrbitIcon(size.height, size.width)} infinite ${
      12 * (1 / orbitSpeed)
    }s linear`};

  color: black;
`;
const OrbitIconSuperWrapper = styled.div`
  display: flex;
`;

const StyledIcon = styled.img`
  object-fit: contain;
  flex: 1;
  width: 6vw;
  height: 6vh;

  ${OrbitIconWrapper}:hover & {
    transform: scale(1.2);
  }
  transition: transform 200ms ease-in-out;
`;

const IconText = styled.div`
  font-size: 1.2vw;
  ${OrbitIconWrapper}:hover & {
    transform: scale(1.2);
  }
  transition: transform 200ms ease-in-out;
`;
