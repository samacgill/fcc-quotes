import { render, screen } from "@testing-library/react";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
