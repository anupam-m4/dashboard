import React from "react";
import "./Goals.css";
import {
  FaBell,
  FaHamburger,
  FaCaretRight,
  FaRecordVinyl,
} from "react-icons/fa";

const Goals = () => {
  return (
    <div className="goal-container">
      <div className="goal">
        <div className="icon">
          <FaRecordVinyl />
        </div>
        <p>Goals</p>
        <span>
          <FaCaretRight />
        </span>
      </div>
      <div className="goal1">
        <div className="icon">
          <FaHamburger />
        </div>
        <p>Popular </p>
        <span>
          <FaCaretRight />
        </span>
      </div>
      <div className="goal2">
        <div className="icon">
          <FaBell />
        </div>
        <p>Menus</p>
        <span>
          <FaCaretRight />
        </span>
      </div>
    </div>
  );
};

export default Goals;
