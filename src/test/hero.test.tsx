import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  test("renders the main heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Unlimited movies, TV shows, and more",
    );
  });

  test("renders the pricing subtitle", () => {
    render(<Hero />);

    const subtitle = screen.getByText(/Starts at \$7\.99/i);
    expect(subtitle).toBeInTheDocument();
  });

  test("renders the call-to-action button", () => {
    render(<Hero />);

    const button = screen.getByRole("button", {
      name: /Restart Your Membership/i,
    });
    expect(button).toBeInTheDocument();
  });
});
