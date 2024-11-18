import { ReviewCard } from "../ReviewCard";
import "./styles.css";

export const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h1>Our customers loves us!</h1>
      <div className="wrapper">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};
