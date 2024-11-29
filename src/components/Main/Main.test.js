import { initializeTimes, updateTimes } from "./index";

test("returns the correct available times", () => {
  const resDate = new Date("01-01-2025");
  expect(initializeTimes(resDate)()).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});

test("returns the correct available times after update", () => {
  const resDate = new Date("01-01-2024");
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(updateTimes(state, { resDate })).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});
