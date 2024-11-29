import { BookingForm } from "../BookingForm";
import { Layout } from "../Layout";

export const BookingPage = ({
  availableTimes,
  onChangeResDate,
  submitForm,
}) => {
  return (
    <Layout>
      <BookingForm
        availableTimes={availableTimes}
        onChangeResDate={onChangeResDate}
        submitForm={submitForm}
      />
    </Layout>
  );
};
