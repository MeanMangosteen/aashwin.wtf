import * as React from "react";
import styled, { css, keyframes } from "styled-components";

const Carousel = styled(
  ({ running = true, children, className = "carousel" }) => {
    const numChildren = children.length;
    const [index, setIndex]: [
      { current: number; previous: number },
      any
    ] = React.useState({
      current: 0,
      previous: numChildren - 1,
    });

    React.useEffect(() => {
      if (!running) return;
      const interval = setInterval(() => {
        setIndex({
          current: mod(index.current + 1, numChildren),
          previous: index.current,
        });
      }, 3000);

      return () => clearInterval(interval);
    }, [numChildren, index, running]);

    const mod = (n: number, m: number) => {
      return ((n % m) + m) % m;
    };
    const handleNext = React.useCallback(() => {
      setIndex({
        current: mod(index.current + 1, numChildren),
        previous: index.current,
      });
    }, [index, numChildren]);

    const handlePrev = React.useCallback(() => {
      setIndex({
        current: mod(index.current - 1, numChildren),
        previous: index.current,
      });
    }, [index, numChildren]);

    const carouselItems = children.map(
      (
        item: React.FunctionComponentElement<{ key: any }>,
        index: string | number | null | undefined
      ) => {
        return (
          <React.Suspense key={index} fallback="Carousel Item is loading">
            {React.cloneElement(item, { key: index })}
          </React.Suspense>
        );
      }
    );
    const shouldReverse = () => {
      const lastIndex = numChildren - 1;
      // edge case
      if (index.current === 0 && index.previous === lastIndex) {
        return false;
      }

      // edge case
      if (index.current === lastIndex && index.previous === 0) {
        return true;
      }

      // standard case
      return index.current < index.previous;
    };
    return (
      <div className={className}>
        <CarouselOuter>
          <CarouselInner
            index={index.current}
            numChildren={numChildren}
            reverse={shouldReverse()}
          >
            {carouselItems}
          </CarouselInner>
        </CarouselOuter>
        <Controls>
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </Controls>
      </div>
    );
  }
)``;

interface CarouselItemsProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}
// CLEANUP: move this to the items folder
const CarouselItem = styled(
  ({ children, className = "carousel-item" }: CarouselItemsProps) => {
    return <div className={className}>{children}</div>;
  }
)`
  flex: 0 0 100% !important;
  img,
  video {
    object-fit: cover !important;
  }
`;

const CarouselOuter = styled.div`
  position: relative;

  /* width: auto;
  overflow-x: hidden;
  height: 0;
  padding-top: 56.25%;

  margin: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2); */
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${(props: {
    index: number;
    numChildren: number;
    reverse: boolean;
  }) =>
    css`
      ${slide(
        props.index,
        props.numChildren,
        props.reverse
      )} 0.5s ease-out normal forwards
    `};
`;

const slide = (
  index: number,
  numChildren: number,
  reverse: boolean
) => keyframes`
  ${
    reverse
      ? `0% { transform: translateX(${
          (index === numChildren - 1 ? 0 : index + 1) * -100
        }%) }
    100% {
      transform: translateX(${index * -100}%)
    }`
      : `0% {
      transform: translateX(${(index ? index - 1 : numChildren) * -100}%)
      }
    100% {
      transform: translateX(${index * -100}%)
    }`
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;

  margin: 0.5rem;
`;

export { Carousel, CarouselItem };
