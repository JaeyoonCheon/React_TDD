import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { PageHeader } from ".";

describe("<PageHeader />", () => {
  it("renders component correctly", () => {
    const history = createMemoryHistory();
    history.push("/");

    const { container } = render(
      <Router history={history}>
        <PageHeader></PageHeader>
      </Router>
    );

    const label = screen.getByText("할 일 목록");
    expect(label).toBeInTheDocument();

    const goBack = screen.queryByText("돌아가기");
    expect(goBack).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
  it("renders component correctly with /add URL", () => {
    const history = createMemoryHistory();
    history.push("/add");

    render(
      <Router history={history}>
        <PageHeader></PageHeader>
      </Router>
    );

    const label = screen.getByText("할 일 추가");
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText("돌아가기");
    expect(goBack).toBeInTheDocument();

    expect(goBack?.getAttribute("href")).toBe("/");
  });
  it("renders component correctly with /detail/:id URL", () => {
    const history = createMemoryHistory();
    history.push("/detail/1");

    render(
      <Router history={history}>
        <PageHeader></PageHeader>
      </Router>
    );

    const label = screen.getByText("할 일 상세");
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText("돌아가기");
    expect(goBack).toBeInTheDocument();

    expect(goBack?.getAttribute("href")).toBe("/");
  });
  it("renders component correctly with NotFound", () => {
    const history = createMemoryHistory();
    history.push("/not_found");

    render(
      <Router history={history}>
        <PageHeader></PageHeader>
      </Router>
    );

    const label = screen.getByText("에러");
    expect(label).toBeInTheDocument();

    const goBack = screen.getByText("돌아가기");
    expect(goBack).toBeInTheDocument();

    expect(goBack?.getAttribute("href")).toBe("/");
  });
  it("renders component correctly with goBack link", () => {
    const history = createMemoryHistory();
    history.push("/not_found");

    render(
      <Router history={history}>
        <PageHeader></PageHeader>
      </Router>
    );

    const goBack = screen.getByText("돌아가기");
    expect(goBack).toBeInTheDocument();

    fireEvent.click(goBack);

    const label = screen.getByText("할 일 목록");
    expect(label).toBeInTheDocument();
    expect(goBack).not.toBeInTheDocument();
  });
});
