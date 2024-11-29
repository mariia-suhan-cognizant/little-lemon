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

test("Submits form", () => {
  const onSubmitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      onChangeResDate={jest.fn()}
      onSubmitForm={onSubmitForm}
    />
  );

  // save the button in a variable
  const btn = screen.getByTestId("make-reservation");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(onSubmitForm).toHaveBeenCalledWith({
    guestsNumber: 1,
    occasion: "",
    resDate: "",
    resTime: "",
  });
});
