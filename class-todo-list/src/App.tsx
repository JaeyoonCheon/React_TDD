import React, { Component } from "react";
import styled from "styled-components";
import type { IScriptSnapshot } from "typescript";

import { Button, Input, ToDoItem } from "./Components";

interface Props {}
interface State {
  readonly toDo: string;
  readonly toDoList: string[];
}

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

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      toDo: "",
      toDoList: [],
    };
  }

  private addToDo = (): void => {
    const { toDo, toDoList } = this.state;
    if (toDo) {
      this.setState({
        toDo: "",
        toDoList: [...toDoList, toDo],
      });
    }
  };
  private deleteToDo = (index: number): void => {
    const { toDoList } = this.state;
    let list = [...toDoList];
    list.splice(index, 1);

    this.setState({
      toDoList: list,
    });
  };

  render() {
    const { toDo, toDoList } = this.state;
    return (
      <Container>
        <Contents>
          <ToDoListContainer data-testid="toDoList">
            {toDoList.map((toDo, index) => (
              <ToDoItem
                key={toDo}
                label={toDo}
                onDelete={() => this.deleteToDo(index)}
              ></ToDoItem>
            ))}
          </ToDoListContainer>
          <InputContainer>
            <Input
              placeholder="할 일을 입력해 주세요"
              value={toDo}
              onChange={(text) => this.setState({ toDo: text })}
            ></Input>
            <Button label="추가" onClick={this.addToDo}></Button>
          </InputContainer>
        </Contents>
      </Container>
    );
  }

  /* static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log("getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log("getSnapshotBeforeUpdate");

    return {
      testData: true,
    };
  }
  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({
      error: true,
    });
  } */
}

export default App;
