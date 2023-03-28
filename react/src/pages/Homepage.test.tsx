import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Homepage";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";

describe("HomePage", () => {
  it("should render Home page", () => {
    render(<Home />);
    const searchElement = screen.getByText(/search/i);
    const cardsElement = screen.getByText(/The Godfather/i);
    expect(searchElement).toBeInTheDocument();
    expect(cardsElement).toBeInTheDocument();
  });
});
