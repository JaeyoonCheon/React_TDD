import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { BrowserRouter, useLocation } from "react-router-dom";

import { ToDoItem } from "./index";

describe("<ToDoItem />", () => {
  it("renders components correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <ToDoItem label="default value" id={1}></ToDoItem>
      </BrowserRouter>
    );

    const toDoItem = screen.getByText("default value");
    expect(toDoItem).toBeInTheDocument();
    expect(toDoItem.getAttribute("href")).toBe("/detail/1");

    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it("clicks the delete button", () => {
    const handleClick = jest.fn();

    render(
      <BrowserRouter>
        <ToDoItem
          label="default value"
          onDelete={handleClick}
          id={1}
        ></ToDoItem>
      </BrowserRouter>
    );

    const deleteButton = screen.getByText("삭제");

    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("clicks the link", () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();

      return (
        <div>
          <div>{pathname}</div>
          <ToDoItem id={1} label="default value"></ToDoItem>
        </div>
      );
    };

    render(
      <BrowserRouter>
        <TestComponent></TestComponent>
      </BrowserRouter>
    );

    const pathName = screen.getByText("/");
    expect(pathName).toBeInTheDocument();

    const todoItem = screen.getByText("default value");
    fireEvent.click(todoItem);
    expect(pathName.textContent).toBe("/detail/1");
  });
});
