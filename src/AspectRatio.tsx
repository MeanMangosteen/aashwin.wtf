// AspectRatio.tsx
import * as React from "react";
import styled from "styled-components";
interface Props {
  children?: any;
  /**
   * The width divided by the height. This ratio can be passed in
   * using JavaScript division syntax. So, to get a 16:9 ratio,
   * simply pass `ratio={16/9}`.
   */
  ratio: number;
  className?: string;
}
export const AspectRatio = ({
  children,
  ratio,
  className = "aspect-ratio",
}: Props) => (
  <OuterWrapper ratio={ratio} className={className}>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);
// AspectRatio.styles.ts
const OuterWrapper = styled.div<{ ratio: number }>`
  position: relative;
  width: 100%;
  height: 0;
  /**
   * For human readability, the ratio is expressed as
   * width / height, so we need to invert it.
   */
  padding-bottom: ${(props) => (1 / props.ratio) * 100}%;
`;
const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
