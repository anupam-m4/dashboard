import React from "react";
import "./Profit.css";

import { FaAngleUp } from "react-icons/fa";

const Profit = () => {
  return (
    <div className="net-profit-container">
      <div className="net-profit-content">
        <div className="net-profit-header">
          <span>Net Profit</span>
        </div>
        <div className="net-profit-amount">
          <span>$ 6759.25</span>
        </div>
        <div className="net-profit-change">
          <FaAngleUp icon={FaAngleUp} />
          <span>3%</span>
        </div>
      </div>
      <div className="goal-completion">
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="70, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            70%
          </text>
        </svg>
        <div className="goal-text">
          <span>The values here has been rounded off.</span>
        </div>
      </div>
    </div>
  );
};

export default Profit;
