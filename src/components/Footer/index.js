import { Layout } from "../Layout";
import "./styles.css";

export const Footer = () => {
  return (
    <footer>
      <Layout>
        <div>
          <img src="images/logo2.svg" alt="logo footer" />
        </div>
        <div>
          <p>Doormat Navigation</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/online">Order online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <p>
            <a href="mailto:hege@example.com">hege@example.com</a>
          </p>
        </div>
        <div>
          <p>Social Media Links</p>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="images/github.svg" alt="github" />
          </a>
        </div>
      </Layout>
    </footer>
  );
};
