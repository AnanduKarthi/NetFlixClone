import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

vi.mock("@clerk/clerk-react", () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-in">{children}</div>
  ),
  SignedOut: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="signed-out">{children}</div>
  ),
  SignInButton: () => <button>Sign in</button>,
  SignUpButton: () => <button>Sign up</button>,
  UserButton: () => <div data-testid="user-button" />,
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    children,
    to,
  }: {
    children: React.ReactNode;
    to: string;
  }) => <a href={to}>{children}</a>,
}));

vi.mock("@/components/SearchBar", () => ({
  default: () => <div data-testid="search-bar" />,
}));

describe("Header", () => {
  test("renders the REACTFLIX logo text", () => {
    render(<Header />);

    const logo = screen.getByRole("heading", { level: 1 });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent("REACTFLIX");
  });

  test("renders logo as a link to the home page", () => {
    render(<Header />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  test("renders sign-in and sign-up buttons when signed out", () => {
    render(<Header />);

    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  test("renders the user button and search bar when signed in", () => {
    render(<Header />);

    expect(screen.getByTestId("user-button")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
  });
});
