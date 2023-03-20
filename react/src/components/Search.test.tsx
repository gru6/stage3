import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./Search";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBar component", () => {
  it("renders search form with input field and search button", () => {
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(inputField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("updates input field when user types into it", () => {
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "test input" } });
    expect(inputField).toHaveValue("test input");
  });

  /* it("saves input field value to local storage when component unmounts", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: "test input" } });
    expect(setItemSpy).not.toHaveBeenCalled();
    jest.runOnlyPendingTimers();
    expect(setItemSpy).toHaveBeenCalledWith("input", "test input");
  });

  it("loads input field value from local storage when component mounts", () => {
    const getItemSpy = jest.spyOn(localStorage, "getItem");
    getItemSpy.mockReturnValueOnce(JSON.stringify("test input"));
    render(<SearchBar />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toHaveValue("test input");
    expect(getItemSpy).toHaveBeenCalledWith("input");
    getItemSpy.mockRestore();
  }); */
});
