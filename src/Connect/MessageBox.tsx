import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import { FiSend } from "react-icons/fi";
import { centerContent } from "../utils/styles";
import emailjs from "emailjs-com";
import { SwitchTransition, Transition } from "react-transition-group";
import RiseLoader from "react-spinners/RiseLoader";

type MessageBoxProps = {
  onSend: (message: string) => void;
  className?: string;
};

export const MessageBox = ({ onSend, className = "" }: MessageBoxProps) => {
  const [input, setInput] = useState<string>("");
  const [stage, setStage] = useState<"waiting" | "sending" | "thanking">(
    "waiting"
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleClick = useCallback(() => {
    if (input === "") return;
    return;
    onSend(input);
  }, [input, onSend]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    setStage("sending");
    emailjs
      .sendForm(
        "gmail",
        "template_wJQMA6eo",
        e.target,
        "user_LL5zwFGe8SoH8rRAs7B0Z"
      )
      .then(
        (result) => {
        },
        (error) => {
        }
      )
      .finally(() => {
        setStage("thanking");
      });
  }, []);

  return (
    <MessageBoxForm className={className} onSubmit={handleSubmit}>
      <SwitchTransition>
        <Transition key={stage} timeout={200}>
          {(state) =>
            stage === "thanking" ? (
              <Fade state={state}>
                <Text>Thank you.</Text>
              </Fade>
            ) : stage === "sending" ? (
              <LoaderContainer>
                <StyledLoader
                  // size={150}
                  color={"#a78860"}
                  margin={10}
                  loading={stage === "sending"}
                />
              </LoaderContainer>
            ) : (
              <Fade state={state}>
                <MessageBoxInput
                  placeholder="Anything at all..."
                  value={input}
                  onChange={handleChange}
                  name="message"
                />

                <SendIconContainer>
                  <SendIcon onClick={handleClick} />
                </SendIconContainer>
              </Fade>
            )
          }
        </Transition>
      </SwitchTransition>
    </MessageBoxForm>
  );
};

const Text = styled.div`
  font-weight: bold;
`;
const Fade = styled.div`
  height: 100%;
  width: 100%;
  transition: 0.5s;
  opacity: ${(props: { state?: any }) => (props.state === "entered" ? 1 : 0)};
  will-change: opacity;
`;

const MessageBoxForm = styled.form`
  ${centerContent}
  position: relative;

  @media screen and (max-width: 850px) {
    ${centerContent}
    flex-direction: column;
  }
`;

const MessageBoxInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 1rem;
  box-sizing: border-box;
  resize: none;
  filter: drop-shadow(2px 4px 3px black);

  @media screen and (max-width: 1250px) {
    height: 200px;
  }
  /* margin-left: 10rem; */
`;

const SendIconContainer = styled.button`
  border: none;
  background: none;
  &:focus {
    outline: 0;
  }

  position: absolute;
  top: 50%;
  left: 100%;

  @media screen and (max-width: 850px) {
    /* top: unset;
    left: unset;
    bottom: 0;
    transform: translate(0, 120%); */
    position: static;

    border: solid;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 1px #5d5143;
    transition: none;
    width: 100%;
    height: 50px;
    transform: none;
    margin-top: 1rem;
  }

  width: 30%;
  height: 30%;

  transform: translate(0, -50%);

  transition: transform 0.2s ease-out;
  &:hover {
    transform: translate(0, -50%) scale(1.15);
  }
  color: #a78860;
`;
const SendIcon = styled(FiSend)`
  /* color: white; */
  /* font-size: 7rem; */
  /* margin-left: 3rem; */
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const StyledLoader = styled(RiseLoader)`
  padding: 1rem;
`;

const LoaderContainer = styled.div`
  padding: 1rem;
`;
