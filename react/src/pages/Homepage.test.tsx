import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Homepage";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../store";

describe("HomePage", () => {
  it("should render Home page", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchElement = screen.getByText(/search/i);
    expect(searchElement).toBeInTheDocument();
  });
});
