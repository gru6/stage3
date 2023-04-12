import React from "react";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { CreateCards } from "./Cards";

describe("Spinner", () => {
  it("should render the spinner", () => {
    render(<CreateCards />);
    const Spinner = screen.getByText(/loading/i);
    expect(Spinner).toBeInTheDocument();
  });
});
