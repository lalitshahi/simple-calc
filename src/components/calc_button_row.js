import React from "react";
import CalcButton from "components/calc_button";
import { map } from "lodash";

const CalcButtonRow = ({ numArray }) => {
  const renderRows = () =>
    map(numArray, (num) => (
      <CalcButton
        value={num.value}
        number={num.number}
        operator={num.operator}
        key={num.value}
      />
    ));

  return <div className="calc_button_row">{renderRows()}</div>;
};

export default CalcButtonRow;
