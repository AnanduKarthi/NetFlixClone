import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

const mockNavigate = vi.fn();

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => mockNavigate,
}));

describe("SearchBar", () => {
  test("renders the search input with correct placeholder", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      /Search for movies, TV shows, and more/i,
    );
    expect(input).toBeInTheDocument();
  });

  test("renders the search icon button", () => {
    render(<SearchBar />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("updates input value when typing", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      /Search for movies, TV shows, and more/i,
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Avatar" } });
    expect(input.value).toBe("Avatar");
  });

  test("calls navigate when the user types a query", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText(
      /Search for movies, TV shows, and more/i,
    );
    fireEvent.change(input, { target: { value: "Batman" } });

    expect(mockNavigate).toHaveBeenCalledWith({
      to: "/search",
      search: { movie: "Batman" },
    });
  });
});
