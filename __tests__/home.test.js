import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home page tests", () => {
  it("Renders correctly", () => {
    render(<Home />);
    expect(screen.getByRole("img", { name: "JokeJoyLogo" })); //Top Logo
    expect(screen.getByText("All the jokes")); //Page title
    expect(screen.getByText("Sort by:")); //Filter label to sort by
    expect(screen.getByText("Order by:")); //Filter label to order by
    expect(screen.getByRole("button", { name: "Apply" })); //Button apply filter
  });
  it("Should render left navigation menu", () => {
    render(<Home />);
    //Navigation buttons / links
    expect(screen.getByRole("button", { name: "All Jokes" }));
    expect(
      screen.getByRole("link", { name: "All Jokes" }).getAttribute("href")
    ).toEqual("/");
    expect(screen.getByRole("button", { name: "Latest Jokes" }));
    expect(
      screen.getByRole("link", { name: "Latest Jokes" }).getAttribute("href")
    ).toEqual("/latest");
    expect(screen.getByRole("button", { name: "General Jokes" }));
    expect(
      screen.getByRole("link", { name: "General Jokes" }).getAttribute("href")
    ).toEqual("/general");
    expect(screen.getByRole("button", { name: "Programming Jokes" }));
    expect(
      screen
        .getByRole("link", { name: "Programming Jokes" })
        .getAttribute("href")
    ).toEqual("/programming");
    expect(screen.getByRole("button", { name: "Knock-Knock Jokes" }));
    expect(
      screen
        .getByRole("link", { name: "Knock-Knock Jokes" })
        .getAttribute("href")
    ).toEqual("/knock-knock");
    expect(screen.getByRole("button", { name: "Random Jokes" }));
    expect(
      screen.getByRole("link", { name: "Random Jokes" }).getAttribute("href")
    ).toEqual("/random");
  });
});
