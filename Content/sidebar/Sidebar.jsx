import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import {
  FaHome,
  FaClipboard,
  FaChartBar,
  FaWallet,
  FaClipboardCheck,
  FaChevronCircleRight,
} from "react-icons/fa";

const Sidebar = () => {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((m) => m.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((m) => m.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} />
      <ul id="mainMenu">
        <Icon icon={<FaHome />} />
        <Icon icon={<FaChartBar />} />
        <Icon icon={<FaClipboard />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaClipboardCheck />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaChevronCircleRight />} />
      </ul>
    </menu>
  );
};

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Sidebar;
