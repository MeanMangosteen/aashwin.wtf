import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import styled, { keyframes, css } from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { centerContent } from "./styles";
import flattenChildren from "react-keyed-flatten-children";

type CarouselWowProps = {
  className?: string;
  children: any;
};

const mod = (n: number, m: number) => {
  return ((n % m) + m) % m;
};

export const CarouselWow = ({ className = "", children }: CarouselWowProps) => {
  const ref = useRef<any>();
  const [numChildren, setNumChildren] = useState<number>(0);
  const [index, setIndex] = useState<{ current: number; previous: number }>({
    current: 0,
    previous: numChildren - 1,
  });

  useEffect(() => {
    setNumChildren(ref.current?.children.length);
    console.log("nummm children", ref.current?.children.length);
  }, []);

  const wrappedChildren = useMemo(() => {
    console.log("children", children);
    console.log("flat children", flattenChildren(children));
    return flattenChildren(children).map((C: any, idx: number) => (
      <ItemWrapper index={idx} currentIndex={index.current}>
        {React.isValidElement(C) ? React.cloneElement(C) : C}
      </ItemWrapper>
    ));
  }, [children, index]);
  console.log("wrapped children", flattenChildren(children));
  const handleNext = useCallback(() => {
    setIndex({
      current: mod(index.current + 1, numChildren),
      previous: index.current,
    });
  }, [index, numChildren]);

  const handlePrev = useCallback(() => {
    setIndex({
      current: mod(index.current - 1, numChildren),
      previous: index.current,
    });
  }, [index, numChildren]);

  return (
    <CarouselWowContainer className={className}>
      <ControlLeft className="control" onClick={handlePrev}>
        <StyledLeftArrow />
      </ControlLeft>
      <ItemContainer ref={ref} index={index.current}>
        {wrappedChildren}
      </ItemContainer>
      <ControlRight className="control" onClick={handleNext}>
        <StyledRightArrow />
      </ControlRight>
    </CarouselWowContainer>
  );
};

const CarouselWowContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  max-height: 100vh;
  max-width: 100vw;

  overflow: hidden;
`;

const ItemContainer = styled.div<{ index: number }>`
  display: flex;
  align-items: stretch;
  overflow-x: scroll;

  scroll-snap-type: x mandatory;
  > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* width: 100vw; */
  }
  /* transition: transform 0.5s ease-out;
  transform: ${(props) =>
    `translateX(${props.index * -100}%)`}; */
`;

const Control = styled.div`
  ${centerContent}
  position: absolute;
  top: 0;
  height: 100%;
  width: 5%;
  z-index: 2;
  opacity: 0.5;
  transition: opacity, transform 200ms ease-out;
  opacity: 0.5;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;
const ControlLeft = styled(Control)`
  left: 0;
`;

const ControlRight = styled(Control)`
  right: 0;
`;

const StyledLeftArrow = styled(BsChevronCompactLeft)`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const StyledRightArrow = styled(BsChevronCompactRight)`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

// ==================================================

type ItemWrapperProps = {
  index: number;
  currentIndex: number;
  children: any;
};
const ItemWrapper = ({ index, currentIndex, children }: ItemWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (currentIndex === index) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentIndex, index]);
  return <>{React.cloneElement(children, { ref })}</>;
};
// ==================================================
interface CarouselWowItemsProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}
// CLEANUP: move this to the items folder
export const CarouselWowItem = React.forwardRef(
  (
    { children, className = "carousel-item" }: CarouselWowItemsProps,
    ref: any
  ) => {
    console.log("ref", ref);
    return (
      <CarouselWowItemContainer ref={ref} className={className}>
        {children}
      </CarouselWowItemContainer>
    );
  }
);

const CarouselWowItemContainer = styled.div`
  flex: 0 0 100%;
  > * {
    height: 100%;
    width: 100%;
  }
`;

const slide = (index: number, numChildren: number) => keyframes`
  from  {
    transform: translateX(${index - 1 * 100}%);
  }
`;
