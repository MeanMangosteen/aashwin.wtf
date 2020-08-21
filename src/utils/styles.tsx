import { css } from "styled-components";

export const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centerAbsolutely = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CSSDividerBottom = ({
  width,
  iHaveSetRelativePosition = false,
}: {
  width: string;
  iHaveSetRelativePosition: boolean;
}) => {
  if (!iHaveSetRelativePosition)
    throw Error("Parent must set relative position");
  return css`
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      bottom: -0px;
      height: 1px;
      width: ${width};
    }

    &::before {
      left: 50%;
      background: linear-gradient(to right, #333 0%, transparent 100%);
    }

    &::after {
      left: 50%;
      background: linear-gradient(to left, #333 0%, transparent 100%);
      transform: translateX(-100%);
    }
  `;
};

export const hoverGrow = css`
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 200ms ease-out;
`;