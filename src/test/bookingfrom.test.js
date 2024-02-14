/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("should render booking when submit button", () => {
  render(<BookingForm />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
test("should allow users insert booking details", () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(dateInput, { target: { value: "2024-02-14" } });
  expect(nameInput).toHaveValue("John Doe");
  expect(dateInput).toHaveValue("2024-02-14");
});
