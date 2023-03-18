import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

describe("App component", () => {
  it("renders header with Home and About Us links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it("renders Home page when on root URL", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
  });

  it("renders About page when on /about URL", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });

  it("renders Error page when on non-existent URL", () => {
    render(
      <MemoryRouter initialEntries={["/non-existent"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /oops/i })).toBeInTheDocument();
  });
});
