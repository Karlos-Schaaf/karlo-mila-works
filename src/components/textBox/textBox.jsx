import React from "react";
import "./TextBox.css";

function TextBox({ text, className }) {
  return (
    <div className={`text-box ${className || ""}`}>
      {text}
    </div>
  );
}

export default TextBox;