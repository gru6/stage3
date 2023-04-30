import React from "react";
import { render, screen } from "@testing-library/react";
import FormPage from "./FormPage";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../store";

describe("FormPage", () => {
  it("should render Form page", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    const cardsName = screen.getByText(/Person name/i);
    const cardsDate = screen.getByText(/Birthday/i);
    const cardsAvatar = screen.getByText(/Avatar/i);

    expect(cardsName).toBeInTheDocument();
    expect(cardsDate).toBeInTheDocument();
    expect(cardsAvatar).toBeInTheDocument();
  });
});
