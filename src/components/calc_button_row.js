import React from "react";
import CalcButton from "components/calc_button";

const CalcButtonRow = () => {
  return (
    <div className="calc_button_row">
      <CalcButton />
      <CalcButton />
      <CalcButton />
      <CalcButton />
    </div>
  );
};

export default CalcButtonRow;
