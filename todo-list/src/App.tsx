import React, { useState } from "react";
import styled from "styled-components";

import { Button, Input, ToDoItem } from "./Components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Contents = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
const InputContainer = styled.div`
  display: flex;
`;
const ToDoListContainer = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = () => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo("");
    }
  };
  const deleteToDo = (index: number) => {
    let list = [...toDoList];
    list.splice(index, 1);

    setToDoList(list);
  };

  return (
    <Container>
      <Contents>
        <ToDoListContainer data-testid="toDoList">
          {toDoList.map((toDo, index) => (
            <ToDoItem
              key={toDo}
              label={toDo}
              onDelete={() => deleteToDo(index)}
            ></ToDoItem>
          ))}
        </ToDoListContainer>
        <InputContainer>
          <Input
            placeholder="할 일을 입력해 주세요"
            value={toDo}
            onChange={(text) => setToDo(text)}
          ></Input>
          <Button label="추가" onClick={addToDo}></Button>
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
