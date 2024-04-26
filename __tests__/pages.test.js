import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import Latest from "../pages/latest";
import General from "../pages/general";
import KnockKnock from "../pages/knock-knock";
import Random from "../pages/random";
import Programming from "../pages/programming";

describe("General tests for all pages", () => {
  const verifyContent = (title, shouldHasFilters = true) => {
    expect(screen.getByRole("img", { name: "JokeJoyLogo" })); //Top Logo
    expect(screen.getByText(title)); //Page title
    if (shouldHasFilters) {
      expect(screen.getByText("Sort by:")); //Filter label to sort by
      expect(screen.getByText("Order by:")); //Filter label to order by
      expect(screen.getByRole("button", { name: "Apply" })); //Button apply filter
    }
  };

  const verifyLeftNavigation = () => {
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
  };

  describe("Content validation tests", () => {
    it("Home page renders correctly", () => {
      render(<Home />);
      verifyContent("All the jokes");
    });

    it("Latest page renders correctly", () => {
      render(<Latest />);
      verifyContent("Latest jokes");
    });

    it("General page renders correctly", () => {
      render(<General />);
      verifyContent("General jokes");
    });

    it("Programming page renders correctly", () => {
      render(<Programming />);
      verifyContent("Programming jokes");
    });

    it("Knock-Knock page renders correctly", () => {
      render(<KnockKnock />);
      verifyContent("Knock Knock jokes");
    });
    it("Random page renders correctly", () => {
      render(<Random />);
      const shouldHasFilters = false;
      verifyContent("Random jokes", shouldHasFilters);
    });
  });

  describe("Left navigation tests", () => {
    it("Home page should render left navigation menu", () => {
      render(<Home />);
      verifyLeftNavigation();
    });
    it("Latest page should render left navigation menu", () => {
      render(<Latest />);
      verifyLeftNavigation();
    });
    it("General page should render left navigation menu", () => {
      render(<General />);
      verifyLeftNavigation();
    });
    it("Programming page should render left navigation menu", () => {
      render(<Programming />);
      verifyLeftNavigation();
    });
    it("KnockKnock page should render left navigation menu", () => {
      render(<KnockKnock />);
      verifyLeftNavigation();
    });
    it("Random page should render left navigation menu", () => {
      render(<Random />);
      verifyLeftNavigation();
    });
  });
});
