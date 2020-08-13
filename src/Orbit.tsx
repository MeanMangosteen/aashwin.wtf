import React from "react";
import { SizeMe } from "react-sizeme";
import styled, { keyframes, css } from "styled-components";
import { centerContent } from "./utils/styles";

type OrbitProps = {
  parentDim?: { height: number | null; width: number | null };
  orbitSize: number; // scale of orbit wrt parent
  orbitSpeed: number; // Nominal, and unitless
  iconSrc: string;
};

export const Orbit = ({ orbitSize, iconSrc, orbitSpeed }: OrbitProps) => {
  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <OrbitContainer orbitSize={orbitSize}>
          <OrbitPath size={size} orbitSpeed={orbitSpeed}>
            <OrbitIconContianer>
              <StyledToolbox
                src={iconSrc}
                size={size}
                orbitSpeed={orbitSpeed}
              />
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

    transform: scale(${width / height}, ${height / width}) rotate(0deg);
}
  
  to {
    transform: scale(${width / height}, ${height / width}) rotate(360deg) ;
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

const RotateIcon = keyframes`
  from {
    transform:  rotate(0deg) scale(0.8, 1);
  }
  to {
    transform:rotate(-360deg)  scale(0.8, 1);
  }

`;

const animateOrbitIcon = (height: number, width: number) => {
  return keyframes`
from {

    transform: rotate(0deg) scale(${height / width},${width / height} ) ;
}
  
  to {
    transform: rotate(-360deg) scale(${height / width}, ${width / height}) ;
  }
  `;
};

const OrbitIconContianer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;

  /* width: 10%;
  height: 10%; */
  width: 3rem;
  height: 3rem;

  justify-content: center;
  transform: translate(-50%, -50%);
`;

const StyledToolbox = styled.img<{ size: any; orbitSpeed: number }>`
  --time: ${({ orbitSpeed }) => `${12 * (1 / orbitSpeed)}`};

  object-fit: contain;
  transform: scale(0.8, 1);
  animation: ${({ size, orbitSpeed }) =>
    css`${animateOrbitIcon(size.height, size.width)} infinite ${
      12 * (1 / orbitSpeed)
    }s linear`};
`;
