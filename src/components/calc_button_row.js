import React from "react";
import CalcButton from "components/calc_button";
import { filter, map } from "lodash";

const CalcButtonRow = ({ numArray, handleClick, isScientificMode }) => {
  const renderRows = () => {
    let numPadsToShow = numArray;

    if (!isScientificMode) {
      numPadsToShow = filter(numArray, (num) => !num.scientificMode);
    }

    return map(numPadsToShow, (num) => {
      return (
        <CalcButton
          value={num.value}
          number={num.number}
          key={num.value}
          handleClick={handleClick}
        />
      );
    });
  };
  return <div className="calc_button_row">{renderRows()}</div>;
};

export default CalcButtonRow;
