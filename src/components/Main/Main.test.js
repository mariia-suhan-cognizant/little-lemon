import { initializeTimes, updateTimes } from "./index";

test("returns the correct available times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("returns the correct available times after update", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(updateTimes(state, {})).toEqual(state);
});
