import React from "react";
import styled from "@emotion/styled";

interface InputComponentProps {
  inputName: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 380px;
  height: 56px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Label = styled.label`
  font-size: 12px;
  color: #999;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
`;

const InputComponent: React.FC<InputComponentProps> = ({
  inputName,
}: {
  inputName: string;
}) => {
  const inputType =
    inputName.toLowerCase() === "password" ? "password" : "text";

  return (
    <InputWrapper>
      <Label>{inputName}</Label>
      <InputField type={inputType} />
    </InputWrapper>
  );
};

export default InputComponent;
