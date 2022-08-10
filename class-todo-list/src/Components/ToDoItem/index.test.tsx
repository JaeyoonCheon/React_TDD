import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import { ToDoItem } from "./index";

describe("<ToDoItem />", () => {
  it("renders components correctly", () => {
    const { container } = render(<ToDoItem label="default value"></ToDoItem>);

    const toDoItem = screen.getByText("default value");
    expect(toDoItem).toBeInTheDocument();

    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it("clicks the delete button", () => {
    const handleClick = jest.fn();

    render(<ToDoItem label="default value" onDelete={handleClick}></ToDoItem>);

    const deleteButton = screen.getByText("삭제");

    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
