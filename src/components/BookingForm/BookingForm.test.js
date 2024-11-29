import { fireEvent, render, screen } from "@testing-library/react";
import { BookingForm } from "./index";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
    />
  );
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Validates res-date", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByTestId("res-date")).toHaveAttribute("required", "");
  expect(screen.getByTestId("res-date")).toBeValid();
});

test("Validates res-time", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByTestId("res-time")).toHaveAttribute("required", "");
  expect(screen.getByTestId("res-time")).toBeValid();
});

test("Validates guests", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByTestId("guests")).toHaveAttribute("min", "1");
  expect(screen.getByTestId("guests")).toHaveAttribute("max", "10");
  expect(screen.getByTestId("guests")).toBeValid();
});

test("Validates occasion", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByTestId("occasion")).toHaveAttribute("required", "");
  expect(screen.getByTestId("occasion")).toBeValid();
});

test("Does not submit invalid form", async () => {
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={[]}
      onChangeResDate={jest.fn()}
      submitForm={submitForm}
    />
  );

  fireEvent.change(screen.getByTestId("guests"), { target: { value: "100" } });

  expect(screen.getByTestId("guests")).toBeInvalid();
  expect(screen.getByTestId("res-time")).toBeInvalid();
});

test("Submits form", () => {
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      submitForm={submitForm}
    />
  );

  const btn = screen.getByTestId("make-reservation");

  fireEvent.click(btn);

  expect(submitForm).toHaveBeenCalledWith({
    guestsNumber: 1,
    occasion: "",
    resDate: new Date().toISOString().split("T")[0],
    resTime: "",
  });
});
