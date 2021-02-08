import React from "react";
import CalcButton from "components/calc_button";
import { map } from "lodash";

const CalcButtonRow = ({ numArray, handleClick }) => {
  const renderRows = () =>
    map(numArray, (num) => (
      <CalcButton
        value={num.value}
        number={num.number}
        key={num.value}
        handleClick={handleClick}
      />
    ));

  return <div className="calc_button_row">{renderRows()}</div>;
};

export default CalcButtonRow;
