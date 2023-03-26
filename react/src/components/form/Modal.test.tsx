import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./Modal";

describe("Modal component", () => {
  it("renders when isOpen is true", () => {
    const handleClose = vi.fn();
    const { getByText, getByAltText } = render(
      <Modal isOpen={true} onClose={handleClose} />
    );

    expect(getByText("Форма отправлена!")).toBeInTheDocument();
    expect(getByAltText("close modal")).toBeInTheDocument();

    fireEvent.click(getByAltText("close modal"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("does not render when isOpen is false", () => {
    const { container } = render(<Modal isOpen={false} onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });
});
