import { Link } from "react-router-dom";
import "./styles.css";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
        </li>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/booking">Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};
