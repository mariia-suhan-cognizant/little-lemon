import { BookingForm } from "../BookingForm";
import { Layout } from "../Layout";

export const BookingPage = ({ availableTimes, onChangeResDate }) => {
  return (
    <Layout>
      <BookingForm
        availableTimes={availableTimes}
        onChangeResDate={onChangeResDate}
      />
    </Layout>
  );
};
