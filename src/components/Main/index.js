import { Routes, Route } from "react-router-dom";
import { BookingPage } from "../BookingPage";
import { HomePage } from "../HomePage";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};
