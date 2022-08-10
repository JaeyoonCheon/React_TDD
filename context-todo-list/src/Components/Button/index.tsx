import React from "react";
import styled from "styled-components";

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}
interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const Container = styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
const Label = styled.div`
  color: #ffffff;
  font-size: 10px;
`;

export const Button = (props: Props) => {
  const {
    label,
    backgroundColor = "#304FFE",
    hoverColor = "#1E40FF",
    onClick,
  } = props;
  return (
    <Container
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      <Label>{label}</Label>
    </Container>
  );
};
