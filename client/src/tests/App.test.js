import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders page with hello world.", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
