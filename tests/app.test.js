import { render, screen, fireEvent } from "@testing-library/react";
import App from "../frontend/src/App";

test("renders vending machine product list", () => {
  render(<App />);
  expect(screen.getByText(/Vending Machine/i)).toBeInTheDocument();
  expect(screen.getByText(/Ranch chips/i)).toBeInTheDocument();
  expect(screen.getByText(/Coca cola/i)).toBeInTheDocument();
});

// test("purchase button click logs balance", () => {
//   render(<App />);
//   const button = screen.getAllByText(/Purchase/i)[0];
//   fireEvent.click(button);
//   expect(screen.getByText(/You've got/)).toBeInTheDocument();
// });
