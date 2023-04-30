/* import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RouterLocation from "./location";
import "@testing-library/jest-dom/extend-expect";

describe("RouterLocation", () => {
  test("displays the current page based on the URL path", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/about"]}>
        <RouterLocation />
      </MemoryRouter>
    );

    expect(getByText("Current page: About us")).toBeInTheDocument();
  });
});
 */
