import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Input } from "./Input";
import { ToDoListContext } from "../Contexts";

interface Props {
  readonly toDo?: string;
  readonly onChange?: (text: string) => void;
  readonly onAdd?: () => void;
}

const Container = styled.div`
  display: flex;
`;

export const InputContainer = () => {
  const [toDo, setToDo] = useState("");
  const { addToDo } = useContext(ToDoListContext);

  return (
    <Container>
      <Input
        placeholder="할 일을 입력해 주세요"
        value={toDo}
        onChange={setToDo}
      />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo("");
        }}
      ></Button>
    </Container>
  );
};
