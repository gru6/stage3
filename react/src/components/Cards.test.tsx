import React from "react";
import { render } from "@testing-library/react";
import { MovieCard, CreateCards } from "./Cards";
import { movies } from "./cinemadata";
import { it, describe, expect } from "vitest";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

describe("MovieCard component", () => {
  const movie = movies[0];
  it("should render the movie card with correct details", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByAltText(`${movie.title}`)).toBeInTheDocument();
    expect(screen.getByText(`${movie.title}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Directed by ${movie.director}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Year ${movie.year}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Actors: ${movie.actors.join(", ")}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${movie.rating}`)).toBeInTheDocument();
  });
});

describe("CreateCards component", () => {
  it("should render the movie cards correctly", () => {
    render(<CreateCards />);

    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getAllByRole("heading")).toHaveLength(6);
    expect(screen.getAllByText(/Directed by/)).toHaveLength(6);
    expect(screen.getAllByText(/Year/)).toHaveLength(6);
    expect(screen.getAllByText(/Actors:/)).toHaveLength(6);
    expect(screen.getAllByText(/Rating:/)).toHaveLength(6);
  });
});
