import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

import { sizes } from "./constants";
import { Button, SelectedButton, FilterButtons } from "./StyledComponents";

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
        <SelectedButton onClick={this.onClickRemove} value={size}>
          {size}
        </SelectedButton>
      ) : (
        <Button onClick={this.onClick} value={size}>
          {size}
        </Button>
      )
    );
  };
  render() {
    return <FilterButtons>{this.renderButtons()}</FilterButtons>;
  }
}
export default FilterBySize;
