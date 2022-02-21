import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "../Search";

const onChange = jest.fn();

describe("Search component", () => {
  test("Search renders", () => {
    render(
      <Search value="" onChange={onChange}>
        Find
      </Search>
    );
    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  test("List renders without children", () => {
    render(<Search value="" onChange={onChange} children={""} />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test("List renders without placeholder", () => {
    render(<Search value="" onChange={onChange} children={""} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  test("custom placeholder works correctly", () => {
    render(<Search value="" onChange={onChange} placeholder="find post" children={""} />);
    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });

  test("onChange works correctly", () => {
    render(
      <Search value="" onChange={onChange}>
        Find
      </Search>
    );
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
