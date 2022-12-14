import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import { InputContainer } from ".";
import { ToDoListProvider } from "Contexts";

describe("<InputContainer />", () => {
  it("renders component correctly", () => {
    const { container } = render(<InputContainer></InputContainer>);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    expect(input).toBeInTheDocument();

    const button = screen.getByText("추가");
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it("empties data after adding data", () => {
    render(<InputContainer></InputContainer>);

    const input = screen.getByPlaceholderText(
      "할 일을 입력해 주세요"
    ) as HTMLInputElement;
    const button = screen.getByText("추가");

    fireEvent.change(input, { target: { value: "study react 1" } });
    expect(input.value).toBe("study react 1");
    fireEvent.click(button);
    expect(input.value).toBe("");
  });
  it("adds input data to localStorage via Context", () => {
    render(
      <ToDoListProvider>
        <InputContainer></InputContainer>
      </ToDoListProvider>
    );

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    const button = screen.getByText("추가");

    expect(localStorage.getItem("ToDoList")).toBeNull();

    fireEvent.change(input, { target: { value: "study react 1" } });
    fireEvent.click(button);

    expect(localStorage.getItem("ToDoList")).toBe('["study react 1"]');
  });
});
