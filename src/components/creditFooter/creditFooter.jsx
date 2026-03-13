import React from "react";
import "./CreditFooter.css";

function CreditFooter({ text, className }) {
  return (
    <div className={`credit-footer ${className || ""}`}>
      {text}
    </div>
  );
}

export default CreditFooter;