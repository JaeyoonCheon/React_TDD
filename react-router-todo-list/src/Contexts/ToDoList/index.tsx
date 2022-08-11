import React, { createContext, useState, useEffect } from "react";

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
}

interface Props {
  readonly children: JSX.Element | JSX.Element[];
}

export const ToDoListContext = createContext<Context>({
  toDoList: [],
  addToDo: (): void => {},
  deleteToDo: (): void => {},
});

export const ToDoListProvider = (props: Props): JSX.Element => {
  const { children } = props;
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      localStorage.setItem("ToDoList", JSON.stringify(newList));
      setToDoList(newList);
    }
  };
  const deleteToDo = (index: number) => {
    let list = [...toDoList];
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
    setToDoList(list);
  };

  useEffect(() => {
    const list = localStorage.getItem("ToDoList");
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []);

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        addToDo,
        deleteToDo,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
