import React, {
  useState,
  useEffect,
  Fragment,
  useCallback as cb,
  useRef,
} from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

type ShowTextWithStyleProps = {
  children: React.ReactElement<StylishItemProps>[];
  skipWaitingGame?: boolean;
  onFinish?: () => void;
  className?: string;
};

export const ShowTextWithStyle = ({
  children,
  onFinish,
  skipWaitingGame = false,
  className = "",
}: ShowTextWithStyleProps) => {
  const [childCount, setChildCount] = useState<number>(0);
  const [visibleChildren, setVisibleChildren] = useState(
    Array(children.length).fill(false) // the indexes represent each child, the value: whether it's visible.
  );
  // const ref = useRef<any>(null);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
  });


  useEffect(() => {
    if (!inView) return;
    if (isFinished) return;
    if (childCount > children.length) {
      onFinish && onFinish();
      setIsFinished(true);
      return;
    }
    const timer = setTimeout(() => {
      visibleChildren[childCount] = true;
      setVisibleChildren([...visibleChildren]);
      setChildCount(childCount + 1);
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childCount, children, inView]);

  const childs = children.map((C, idx) => {
    return (
      <Transition
        in={skipWaitingGame ? true : visibleChildren[idx]}
        timeout={0}
        key={idx}
        onEnter={cb(() => C.props.onShow && C.props.onShow(), [])}
      >
        {
          (state) =>
            // <Fade state={state}>
            // {React.isValidElement(C) ? React.cloneElement(C) : C}
            React.cloneElement(C, { state })
          // </Fade>
        }
      </Transition>
    );
  });
  return (
    <WithStyleContainer ref={ref} className={className}>
      {childs}
    </WithStyleContainer>
  );
};

type StylishItemProps = {
  onShow?: () => void;
  state?: any;
  children: React.ReactNode;
  className?: string;
};

export const StylishItem = ({
  onShow,
  state,
  children,
  className = "",
}: StylishItemProps) => {
  return (
    <Fade state={state} className={className}>
      {children}
    </Fade>
  );
};

const WithStyleContainer = styled.div`
  min-height: 1px;
  min-width: 1px;
`;

const Fade = styled.div`
  transition: 0.5s;
  opacity: ${(props: { state?: any }) => (props.state === "entered" ? 1 : 0)};
  will-change: opacity;
`;
