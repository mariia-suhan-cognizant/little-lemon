import "./styles.css";

export const SpecialsPost = ({ src, alt, title, price, description }) => {
  return (
    <article className="post">
      <img src={src} alt={alt} />
      <div className="content">
        <div className="text">
          <h2>{title}</h2>
          <span>{price}</span>
        </div>
        <p>{description}</p>
        <h3>Order Delivery</h3>
      </div>
    </article>
  );
};
