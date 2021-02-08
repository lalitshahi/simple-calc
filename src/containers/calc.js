import React, { Component } from "react";
import CalcButtonRow from "components/calc_button_row";
import CalcOutputBar from "components/calc_output_bar";

class CalculatorContainer extends Component {
  render() {
    return (
      <div className="calc_container">
        <CalcOutputBar />
        <CalcButtonRow />
        <CalcButtonRow />
        <CalcButtonRow />
        <CalcButtonRow />
      </div>
    );
  }
}

export default CalculatorContainer;
