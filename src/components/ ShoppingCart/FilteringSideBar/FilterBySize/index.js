import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import "./styles.css";
import { sizes } from "./constants";
@observer
class FilterBySize extends Component {
  @action
  onClick = e => {
    this.props.shoppingstore.addToSelectedSizes(e.target.value);
  };
  @action
  onClickRemove = e => {
    this.props.shoppingstore.removeFromSelectedSizes(e.target.value);
  };
  renderButtons = () => {
    return sizes.map(size =>
      this.props.shoppingstore.selectedSizes.includes(size) ? (
        <button
          onClick={this.onClickRemove}
          value={size}
          className="selected-button"
        >
          {size}
        </button>
      ) : (
        <button onClick={this.onClick} value={size} className="size-buttons">
          {size}
        </button>
      )
    );
  };
  render() {
    return <div className="size-filter">{this.renderButtons()}</div>;
  }
}
export default FilterBySize;
