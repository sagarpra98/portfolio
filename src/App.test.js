import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders name and mobile developer title", () => {
  render(<App />);
  expect(screen.getAllByText(/Sagar Prajapati/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    /Lead Mobile Engineer.*React Native.*iOS.*Android/
  );
});

test("highlights product work, the three recent apps, skills, and OTA updates", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Products shipped, problems solved/i })).toBeInTheDocument();
  expect(screen.getByText("Fast Cast")).toBeInTheDocument();
  expect(screen.getByText("Casting Networks")).toBeInTheDocument();
  expect(screen.getByText(/OTA delivery for eligible JavaScript fixes/i)).toBeInTheDocument();
  expect(screen.getByText("Google Play Billing")).toBeInTheDocument();
  expect(screen.getAllByText(/.NET\/C# backend/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Also contributed to the \.NET\/C# backend/i)).toHaveTextContent(
    /Firebase Cloud Messaging \(FCM\) push notifications/
  );
  expect(screen.getByText("Backend & notifications")).toBeInTheDocument();
});

test("switches among React Native, Swift, and C# code samples", () => {
  render(<App />);

  expect(screen.getByRole("tabpanel").textContent).toContain("React Native");
  fireEvent.click(screen.getByRole("tab", { name: "Swift" }));
  expect(screen.getByRole("tabpanel").textContent).toContain("struct MobileEngineer");

  fireEvent.click(screen.getByRole("tab", { name: "React Native" }));
  expect(screen.getByRole("tabpanel").textContent).toContain("React Native");

  fireEvent.click(screen.getByRole("tab", { name: ".NET / C#" }));
  expect(screen.getByRole("tabpanel").textContent).toContain("Firebase Cloud Messaging");
});
