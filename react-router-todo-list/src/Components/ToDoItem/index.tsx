import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../Button";

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
  readonly id: number;
}

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const Label = styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-left: 20px;
  text-decoration: none;
`;

export const ToDoItem = (props: Props) => {
  const { label, onDelete, id } = props;
  return (
    <Container>
      <Label to={`/detail/${id}`}>{label}</Label>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={onDelete}
      ></Button>
    </Container>
  );
};
