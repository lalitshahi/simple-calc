import React from "react";

const CalcButton = ({ value, number, handleClick }) => {
  return (
    <div className="calc_button" onClick={() => handleClick(value, number)}>
      {value}
    </div>
  );
};

export default CalcButton;
