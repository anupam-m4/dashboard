import React from "react";
import "./Review.css";

const CustomerReview = ({ imgSrc, name, rating, feedback }) => {
  return (
    <div className="review">
      <div className="review-box">
        <img src={imgSrc} alt="Customer" className="customer-img" />
        <h3 className="customer-name">{name}</h3>
      </div>

      <div className="customer-info">
        <div className="customer-rating">
          {Array(5)
            .fill()
            .map((_, i) => (
              <span
                key={i}
                className={i < rating ? "star filled" : "star unfilled"}
              >
                &#9733;
              </span>
            ))}
        </div>
        <p className="customer-feedback">{feedback}</p>
      </div>
    </div>
  );
};

const Review = ({ reviews }) => {
  return (
    <div className="review-container">
      {reviews.map((review, index) => (
        <CustomerReview
          key={index}
          imgSrc={review.imgSrc}
          name={review.name}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </div>
  );
};

export default Review;
