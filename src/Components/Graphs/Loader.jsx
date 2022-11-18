import React from "react";
import loading from "../Assets/Images/loading.gif";

function Loader() {
  return (
    <div className="load">
      <img src={loading} alt="error" />
    </div>
  );
}

export default Loader;
