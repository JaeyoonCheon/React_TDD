/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const toDoList = screen.getByTestId("toDoList");
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    expect(input).toBeInTheDocument();

    const label = screen.getByText("추가");
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it("adds and deletes ToDo items", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    const button = screen.getByText("추가");

    fireEvent.change(input, { target: { value: "study react 1" } });
    fireEvent.click(button);

    const toDoItem = screen.getByText("study react 1");
    expect(toDoItem).toBeInTheDocument();

    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();

    const toDoList = screen.getByTestId("toDoList");
    expect(toDoList.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: "study react 2" } });
    fireEvent.click(button);

    const toDoItem2 = screen.getByText("study react 2");
    expect(toDoItem2).toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(2);

    const deleteButtons = screen.getAllByText("삭제");
    fireEvent.click(deleteButtons[0]);

    expect(toDoItem).not.toBeInTheDocument();
    expect(toDoList.childElementCount).toBe(1);
  });
  it("does not add empty ToDo", () => {
    render(<App />);

    const toDoList = screen.getByTestId("toDoList");
    const length = toDoList.childElementCount;

    const button = screen.getByText("추가");

    fireEvent.click(button);

    expect(toDoList.childElementCount).toBe(length);
  });
  it("loads localStorage data", () => {
    localStorage.setItem("ToDoList", '["ToDo 1","ToDo 2","ToDo 3"]');

    render(<App></App>);

    expect(screen.getByText("ToDo 1")).toBeInTheDocument();
    expect(screen.getByText("ToDo 2")).toBeInTheDocument();
    expect(screen.getByText("ToDo 3")).toBeInTheDocument();
    expect(screen.getAllByText("삭제").length).toBe(3);
  });
});
