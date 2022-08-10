import React, { Component } from "react";
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

export class Input extends Component<Props> {
  render() {
    const { placeholder, value, onChange } = this.props;
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
  }
}
