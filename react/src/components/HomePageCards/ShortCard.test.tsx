import React from "react";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import ShortCard from "./ShortCard";

describe("ShortCard", () => {
  const mockItems = [
    {
      id: "1",
      views: "1234",
      width_o: 800,
      height_o: 600,
      farm: 1,
      server: "1234",
      secret: "abcd",
      title: "Test Image 1",
    },
    {
      id: "2",
      views: "5678",
      width_o: 1024,
      height_o: 768,
      farm: 2,
      server: "5678",
      secret: "efgh",
      title: "Test Image 2",
    },
  ];

  it("should render items with correct values", () => {
    render(
      <ShortCard
        items={mockItems}
        selectedItemId={null}
        handleOpenModal={() => {}}
      />
    );

    // Check that each item is rendered with the correct values
    const viewsElements = screen.getAllByText(/views:/i);
    expect(viewsElements).toHaveLength(2);
    expect(viewsElements[0]).toBeInTheDocument();
    expect(viewsElements[1]).toBeInTheDocument();

    const sizeElements = screen.getAllByText(/original size:/i);
    expect(sizeElements).toHaveLength(2);
    expect(sizeElements[0]).toBeInTheDocument();
    expect(sizeElements[1]).toBeInTheDocument();

    const imgElements = screen.getAllByAltText(/Test Image/i);
    expect(imgElements).toHaveLength(2);
  });
});
