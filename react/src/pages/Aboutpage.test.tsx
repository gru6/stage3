import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./Aboutpage";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";

describe("About", () => {
  it("should render the title", () => {
    render(<About />);
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("Upon the time everything will be here...");
  });
});
