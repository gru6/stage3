import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./Errorpage";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";

describe("ErrorPage", () => {
  it("should render error message", () => {
    const { getByText } = render(<ErrorPage />);
    const headingElement = getByText(/oops/i);
    const paragraphElement = getByText(/sorry/i);
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
