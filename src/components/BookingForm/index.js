import { useEffect, useState } from "react";
import "./styles.css";

export const BookingForm = ({
  availableTimes,
  onChangeResDate,
  submitForm,
}) => {
  const [resDate, setResDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [resTime, setResTime] = useState("");

  const [guestsNumber, setGuestsNumber] = useState(1);

  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    onChangeResDate(resDate);
  }, [onChangeResDate, resDate]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (submitForm)
      submitForm({
        resDate,
        resTime,
        guestsNumber,
        occasion,
      });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        data-testid="res-date"
        value={resDate}
        required={true}
        onChange={(event) => {
          setResDate(event.currentTarget?.value || "");
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        data-testid="res-time"
        value={resTime}
        required={true}
        onChange={(event) => {
          setResTime(event.currentTarget?.value || "");
        }}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        data-testid="guests"
        value={guestsNumber}
        onChange={(event) => {
          setGuestsNumber(event.currentTarget?.value || 1);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        data-testid="occasion"
        required={true}
        value={occasion}
        onChange={(event) => {
          setOccasion(event.currentTarget?.value || "");
        }}
      >
        <option>Anniversary</option>
        <option>Birthday</option>
      </select>
      <input
        type="submit"
        data-testid="make-reservation"
        value="Make Your reservation"
      />
    </form>
  );
};
