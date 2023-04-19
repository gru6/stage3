import React from "react";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { CreateCards } from "./Cards";
import { Provider } from "react-redux";
import store from "../../store";

describe("Spinner", () => {
  it("should render the spinner", () => {
    render(
      <Provider store={store}>
        <CreateCards />
      </Provider>
    );
    const Spinner = screen.getByText(/loading/i);
    expect(Spinner).toBeInTheDocument();
  });
});
