import { useState } from "react";
import "./styles.css";

export const BookingForm = () => {
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [resDate, setResDate] = useState("");

  const onChangeResDate = (event) => {
    setResDate(event.currentTarget?.value || "");
  };

  const [resTime, setResTime] = useState("");

  const onChangeResTime = (event) => {
    setResTime(event.currentTarget?.value || "");
  };

  const [guestsNumber, setGuestsNumber] = useState(1);

  const onChangeGuestsNumber = (event) => {
    setGuestsNumber(event.currentTarget?.value || 1);
  };

  const [occasion, setOccasion] = useState("");

  const onChangeOccasion = (event) => {
    setOccasion(event.currentTarget?.value || "");
  };

  return (
    <form className="form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={onChangeResDate}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={resTime} onChange={onChangeResTime}>
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
        value={guestsNumber}
        onChange={onChangeGuestsNumber}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={onChangeOccasion}>
        <option>Anniversary</option>
        <option>Birthday</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
