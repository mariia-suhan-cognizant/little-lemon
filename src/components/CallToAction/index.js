import { Button } from "../Button";
import { Layout } from "../Layout";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const CallToAction = () => {
  const navigate = useNavigate();

  const onReserveTable = () => {
    navigate("/booking");
  };

  return (
    <div className="hero">
      <Layout>
        <div className="hero-container">
          <div className="hero-text">
            <h3>Little Lemon</h3>
            <h5>Chicago</h5>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button className="primary" onClick={onReserveTable}>
              Reserve a Table
            </Button>
          </div>
          <div>
            <img src="images/restauranfood.jpg" alt="restauran food" />
          </div>
        </div>
      </Layout>
    </div>
  );
};
