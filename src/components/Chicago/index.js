import { Layout } from "../Layout";
import "./styles.css";

export const Chicago = () => {
  return (
    <Layout>
      <section className="chicago">
        <div className="left">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment the
            restaurant features a locally sourced menu with daily specials.
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment the
            restaurant features a locally sourced menu with daily specials.
          </p>
        </div>
        <div className="right">
          <img src="images/restaurant_chef.jpg" alt="restaurant chef" />
        </div>
      </section>
    </Layout>
  );
};
