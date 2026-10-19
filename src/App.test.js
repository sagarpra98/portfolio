import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name and mobile developer title", () => {
  render(<App />);
  expect(screen.getAllByText(/Sagar Prajapati/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    /Lead Mobile Engineer/
  );
});

test("highlights product work, the three recent apps, skills, and OTA updates", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Products shipped, problems solved/i })).toBeInTheDocument();
  expect(screen.getByText("Fast Cast")).toBeInTheDocument();
  expect(screen.getByText("Casting Networks")).toBeInTheDocument();
  expect(screen.getByText(/OTA delivery for eligible JavaScript fixes/i)).toBeInTheDocument();
  expect(screen.getByText("Google Play Billing")).toBeInTheDocument();
});
