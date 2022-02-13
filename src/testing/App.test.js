import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  test("App renders", () => {
    render(<App />);
    expect(screen.getByText("Find Course:")).toBeInTheDocument;
  });
  test("typing in search box works", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument;
  });
  test("search filter works", () => {
    render(<App />);
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument;
    expect(screen.getByText(/CSS/)).toBeInTheDocument;
    userEvent.type(screen.getByRole("textbox"), "script");
    expect(screen.queryByText(/CSS/)).toBeNull();
    expect(screen.queryByText(/JavaScript/)).toBeInTheDocument;
  });
  test("App snapshot", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
