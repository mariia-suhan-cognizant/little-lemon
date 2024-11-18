import "./styles.css";

export const ReviewCard = () => {
  return (
    <article className="review">
      <div className="rating">
        <img src="images/star.svg" alt="1 star" />
        <img src="images/star.svg" alt="2 stars" />
        <img src="images/star.svg" alt="3 stars" />
        <img src="images/star.svg" alt="4 stars" />
        <img src="images/star.svg" alt="5 stars" />
      </div>
      <h2>Review title</h2>
      <p>Review body</p>
      <div className="reviewer">
        <img src="images/avatar.svg" alt="avatar" />
        <div className="info">
          <h3>Reviewer name</h3>
          <p>Date</p>
        </div>
      </div>
    </article>
  );
};
