import React from "react";
import "./Card.css";

const Card = ({ icon, title, value, change, isPositive }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">{icon}</div>
        <div className="card-title">{title}</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="card-value">{value}</div>
        <div className={`card-change ${isPositive ? "positive" : "negative"}`}>
          {isPositive ? "▲" : "▼"} {change}%
        </div>
      </div>
    </div>
  );
};

export default Card;
