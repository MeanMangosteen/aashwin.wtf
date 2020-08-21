import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { centerContent } from "../utils/styles";
import emailjs from "emailjs-com";

type MessageBoxProps = {
  onSend: (message: string) => void;
  className?: string;
};

export const MessageBox = ({ onSend, className = "" }: MessageBoxProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleClick = useCallback(() => {
    if (input === "") return;
    onSend(input);
  }, [input, onSend]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_wJQMA6eo",
        e.target,
        "user_LL5zwFGe8SoH8rRAs7B0Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }, []);

  return (
    <MessageBoxForm className={className} onSubmit={handleSubmit}>
      <MessageBoxInput
        placeholder="Anything at all..."
        value={input}
        onChange={handleChange}
        name="message"
      />

      <SendIconContainer>
        <SendIcon onClick={handleClick} />
      </SendIconContainer>
    </MessageBoxForm>
  );
};

const MessageBoxForm = styled.form`
  ${centerContent}
  position: relative;
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
