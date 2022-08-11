import React, { useContext } from "react";
import styled from "styled-components";

import { ToDoItem } from "Components/ToDoItem";
import { ToDoListContext } from "Contexts";

const Container = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

export const ToDoList = () => {
  const { toDoList, deleteToDo } = useContext(ToDoListContext);

  return (
    <Container data-testid="toDoList">
      {toDoList.map((toDo, index) => (
        <ToDoItem
          key={toDo}
          label={toDo}
          onDelete={() => deleteToDo(index)}
        ></ToDoItem>
      ))}
    </Container>
  );
};
