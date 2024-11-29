import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { BookingPage } from "../BookingPage";
import { HomePage } from "../HomePage";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, { resDate }) => {
  return state;
};

export const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const onChangeResDate = (resDate) => {
    dispatch({ resDate });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onChangeResDate={onChangeResDate}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};
