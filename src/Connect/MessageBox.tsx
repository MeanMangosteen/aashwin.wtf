import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { centerContent } from "../utils/styles";

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

  return (
    <MessageBoxContainer className={className}>
      <MessageBoxInput
        placeholder="Anything at all..."
        value={input}
        onChange={handleChange}
      />
      <SendIconContainer>
        <SendIcon onClick={handleClick} />
      </SendIconContainer>
    </MessageBoxContainer>
  );
};

const MessageBoxContainer = styled.div`
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

const SendIconContainer = styled.div`
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
