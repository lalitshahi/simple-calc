import React, { Component } from "react";
import CalcButtonRow from "components/calc_button_row";
import CalcOutputBar from "components/calc_output_bar";
import numPads from "fixtures/num_pads.json";
import { chunk, map } from "lodash";

class CalculatorContainer extends Component {
  state = {
    result: "0",
    operator: null,
    operands: [],
  };
  renderCalcButtonRows = () => {
    const numPadChunks = chunk(numPads, 4);
    return map(numPadChunks, (numArray, index) => (
      <CalcButtonRow
        numArray={numArray}
        key={index}
        handleClick={this.handleNumButtonClick}
      />
    ));
  };

  handleNumButtonClick = (value, number) => {
    if (value === "Clear") {
      this.handleClearOutput();
      return;
    }
    const { operator, operands } = this.state;

    if (number && !operator) {
      this.setState((state) => ({
        result: state.result === "0" ? value : `${state.result}${value}`,
      }));
    }

    if (!number && !operator) {
      this.setState((state) => ({
        operator: value,
      }));
    }

    if (number && operator) {
      this.setState((state) => ({
        result: "" + value,
        operator: null,
        operands: state.operands.concat(state.result, state.operator),
      }));
    }

    if (!number && operands.length !== 0) {
      const prevOperator = operands[1];

      this.setState((state) => {
        if (prevOperator === "+") {
          return {
            result: Number(operands[0]) + Number(state.result),
          };
        } else if (prevOperator === "-") {
          return {
            result: Number(operands[0]) - Number(state.result),
          };
        } else if (prevOperator === "*") {
          return {
            result: Number(operands[0]) * Number(state.result),
          };
        } else if (prevOperator === "/") {
          return {
            result: Number(operands[0]) / Number(state.result),
          };
        }
      });
      if (value === "=") {
        this.setState({
          operator: null,
          operands: [],
        });
      } else {
        this.setState({
          operator: value,
          operands: [],
        });
      }
    }
  };

  handleClearOutput = () =>
    this.setState({ result: "0", operator: null, operands: [] });

  render() {
    return (
      <div className="calc_container">
        <CalcOutputBar value={this.state.result} />
        {this.renderCalcButtonRows()}
      </div>
    );
  }
}

export default CalculatorContainer;
