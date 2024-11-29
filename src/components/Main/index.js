import { useCallback, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { BookingPage } from "../BookingPage";
import { HomePage } from "../HomePage";
import { ConfirmedBooking } from "../ConfirmedBooking";
import { fetchAPI, submitAPI } from "../../api";

export const initializeTimes = (date) => () => {
  try {
    const availableTimes = fetchAPI(date);
    return availableTimes;
  } catch {
    return [];
  }
};

export const updateTimes = (state, { resDate }) => {
  const availableTimes = fetchAPI(new Date(resDate));
  return availableTimes;
};

export const Main = () => {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes(new Date())
  );

  const onChangeResDate = useCallback((resDate) => {
    dispatch({ resDate });
  }, []);

  const submitForm = useCallback(
    (formData) => {
      const res = submitAPI(formData);
      if (res === true) {
        navigate("/booking/confirmed");
      }
    },
    [navigate]
  );

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
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};
