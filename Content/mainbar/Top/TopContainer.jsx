import React from "react";
import "./TopContainer.css";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaEnvelope, FaCog } from "react-icons/fa";
import user from "../../../assets/women.jpg";

const TopContainer = () => {
  return (
    <div className="top-container">
      <div className="inputBox">
        <input type="text" placeholder="Search" />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className="profile-container">
        <i className="profileIcon">
          <FaEnvelope />
          {/* <FaCog />
          <FaBell /> */}
        </i>

        <div className="profileImg">
          <img src={user} />
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
