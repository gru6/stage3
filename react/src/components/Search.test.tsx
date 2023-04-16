import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./Search";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../store";

describe("SearchBar component", () => {
  it("renders search form with input field and search button", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputField = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("updates input field when user types into it", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "test input" } });
    expect(inputField).toHaveValue("test input");
  });
});
