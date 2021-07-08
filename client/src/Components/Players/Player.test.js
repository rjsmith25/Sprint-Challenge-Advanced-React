import React from "react";
import { render } from "@testing-library/react";
import Players from "./Players";
import axios from "axios";

test("players rendered", async () => {
  let res = await axios("http://localhost:5000/api/players");
  const { getByTestId } = render(<Players players={res.data} />);
  const players = getByTestId(/players/i);

  expect(players).toBeTruthy();
  expect(players).not.toBeFalsy();
});
