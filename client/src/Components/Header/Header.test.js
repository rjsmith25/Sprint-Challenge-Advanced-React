import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("title rendered", () => {
  const { getByText } = render(<Header />);
  const title = getByText(/players/i);

  expect(title).toBeTruthy();
  expect(title).not.toBeFalsy();
});

test("darkmode rendered", () => {
  const { getByTestId } = render(<Header />);
  const darkmode = getByTestId(/darkmode/i);

  expect(darkmode).toBeTruthy();
  expect(darkmode).not.toBeFalsy();
});
