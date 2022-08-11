import React, { useState, useContext } from "react";
import styled from "styled-components";

import { Button, Input } from "Components";
import { ToDoListContext } from "Contexts";

interface Props {
  readonly onAdd?: () => void;
}

const Container = styled.div`
  display: flex;
`;

export const InputContainer = (props: Props) => {
  const { onAdd } = props;
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
          if (toDo && typeof onAdd === "function") {
            onAdd();
          }
        }}
      ></Button>
    </Container>
  );
};
