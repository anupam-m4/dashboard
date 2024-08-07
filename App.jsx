import React from "react";
import "./App.css";

import Sidebar from "./Content/sidebar/Sidebar";
import Mainbar from "./Content/mainbar/Mainbar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Mainbar />
    </div>
  );
};

export default App;
