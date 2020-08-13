import React from "react";
import ToolboxSVG from "./images/toolbox.svg";
import { SizeMe } from "react-sizeme";
import styled, { keyframes, css } from "styled-components";
import { centerContent } from "./utils/styles";

type OrbitProps = {
  parentDim: { height: number | null; width: number | null };
  orbitSize: number; // scale of orbit wrt parent
};

export const Orbit = ({ parentDim, orbitSize }: OrbitProps) => {
  return (
    <SizeMe monitorHeight>
      {({ size }) => (
        <OrbitContainer orbitSize={orbitSize}>
          <OrbitPath size={size}>
            <OrbitIconContianer>
              <StyledToolbox src={ToolboxSVG} />
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

const LongOrbitPathFrames = keyframes`
from {

    transform: scale(1, 1.2) rotate(0deg);
}
  
  to {
    transform: scale(1, 1.2) rotate(360deg) ;
  }
`;

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

const OrbitPath = styled.div<{ size: any }>`
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
  animation: ${({ size }) =>
    size.width > size.height
      ? css`
          ${FatOrbitPathFrames} infinite 12s linear
        `
      : css`
          ${LongOrbitPathFrames} infinite 12s linear
        `};

  border: 2px #4a437f dashed;
  border-radius: 100%;
`;

const rotateLeft = keyframes`
  from {
    transform:  rotate(0deg) scale(0.8, 1);
  }
  to {
    transform:rotate(-360deg)  scale(0.8, 1);
  }

`;

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

const StyledToolbox = styled.img`
  object-fit: contain;
  transform: scale(0.8, 1);
  animation: ${rotateLeft} infinite 12s linear;
`;
