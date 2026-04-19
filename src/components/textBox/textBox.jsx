import React from "react";
import "./TextBox.css";

function TextBox({ paragraphs, className }) {
  return (
    <div className={`text-box ${className || ""}`}>
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}

export default TextBox;