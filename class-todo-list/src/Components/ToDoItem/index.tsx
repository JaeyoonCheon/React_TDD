import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "../Button";

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const Label = styled.div`
  flex: 1;
  font-size: 16px;
  margin-left: 20px;
`;

export class ToDoItem extends Component<Props> {
  render() {
    const { label, onDelete } = this.props;
    return (
      <Container>
        <Label>{label}</Label>
        <Button
          label="삭제"
          backgroundColor="#FF1744"
          hoverColor="#F01440"
          onClick={onDelete}
        ></Button>
      </Container>
    );
  }
}
