import React from "react";
import "./style.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progressBar">
      <div
        className="progress"
        style={{
          width: `${percentage}%`
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
