import React, { Component } from "react";
import CalcButtonRow from "components/calc_button_row";
import CalcOutputBar from "components/calc_output_bar";
import numPads from "fixtures/num_pads.json";
import { chunk, map } from "lodash";

class CalculatorContainer extends Component {
  renderCalcButtonRows = () => {
    const numPadChunks = chunk(numPads, 4);
    return map(numPadChunks, (numArray, index) => (
      <CalcButtonRow numArray={numArray} key={index} />
    ));
  };

  render() {
    return (
      <div className="calc_container">
        <CalcOutputBar />
        {this.renderCalcButtonRows()}
      </div>
    );
  }
}

export default CalculatorContainer;
