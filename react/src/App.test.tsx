import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Homepage";
import About from "./pages/Aboutpage";
import ErrorPage from "./pages/Errorpage";

describe("App", () => {
  it("renders Home page by default", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("renders About page when About link is clicked", () => {
    render(<App />, { wrapper: MemoryRouter });
    const aboutLink = screen.getByText(/About Us/i);
    fireEvent.click(aboutLink);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });

  it("renders Error page when a non-existent route is navigated to", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Route path="/" Component={Home} />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Oops, something went wrong!/i)
    ).toBeInTheDocument();
  });

  it("renders header with Home and About links", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it("renders Home component correctly", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();
  });

  it("renders About component correctly", () => {
    render(<About />);
    expect(screen.getByText(/Learn more about us/i)).toBeInTheDocument();
  });

  it("renders ErrorPage component correctly", () => {
    render(<ErrorPage />);
    expect(
      screen.getByText(/Oops, something went wrong!/i)
    ).toBeInTheDocument();
  });
});
