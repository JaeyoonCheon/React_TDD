import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { PageHeader } from "Components";
import { ToDoListProvider } from "Contexts";
import { List, Add, Detail, NotFound } from "Pages";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader></PageHeader>
        <Switch>
          <Route exact path="/">
            <List></List>
          </Route>
          <Route path="/add">
            <Add></Add>
          </Route>
          <Route path="/detail/:id">
            <Detail></Detail>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
