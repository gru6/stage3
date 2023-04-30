import { render, screen } from "@testing-library/react";
import { CardDetails } from "./CardDetails";
import "@testing-library/jest-dom/extend-expect";

describe("CardDetails", () => {
  const item = {
    id: "123",
    secret: "abc",
    farm: 1,
    server: "456",
    title: "Test Title",
    ownername: "Test Owner",
    originalformat: "jpg",
    width_o: 1000,
    height_o: 500,
    tags: "test, tags",
    views: "12345",
  };

  it("should render all the item details", () => {
    render(<CardDetails item={item} />);
    expect(screen.getByAltText(item.title)).toBeInTheDocument();
    expect(screen.getByText(`Title: ${item.title}`)).toBeInTheDocument();
    expect(screen.getByText(`Owner: ${item.ownername}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Format: ${item.originalformat}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Original size: ${item.width_o} x ${item.height_o} px`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Tags: ${item.tags}`)).toBeInTheDocument();
    expect(screen.getByText(`views: 12 345`)).toBeInTheDocument();
  });
});
