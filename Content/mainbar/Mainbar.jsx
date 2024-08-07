import React from "react";
import "./Mainbar.css";
import TopContainer from "./Top/TopContainer";
import BottomContainer from "./Bottom/BottomContainer";

const Mainbar = () => {
  return (
    <div className="container">
      <TopContainer />
      <BottomContainer />
    </div>
  );
};

export default Mainbar;
