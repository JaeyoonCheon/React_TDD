import React from "react";
import styled from "styled-components";

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

export const Input = (props: Props) => {
  const { placeholder, value, onChange } = props;
  return (
    <InputBox
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        if (typeof onChange === "function") {
          onChange(event.target.value);
        }
      }}
    ></InputBox>
  );
};
