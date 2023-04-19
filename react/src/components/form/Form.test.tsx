import React from "react";
import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";

describe("Form", () => {
  it("should render Form", () => {
    render(
      <Form
        updateData={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const cardsName = screen.getByText(/Person name/i);
    const cardsDate = screen.getByText(/Birthday/i);
    const cardsAvatar = screen.getByText(/Upload avatar/i);

    expect(cardsName).toBeInTheDocument();
    expect(cardsDate).toBeInTheDocument();
    expect(cardsAvatar).toBeInTheDocument();
  });
});
