import React from "react";
import loading from "../Assets/Images/loading.gif";
// import "./Loader.css";

function Loader() {
  return (
    <div className="load">
      <img src={loading} alt="error" />
    </div>
  );
}

export default Loader;
