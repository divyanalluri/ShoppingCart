import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
//import "./styles.css";
import FilterBySize from "./FilterBySize";
import { SizeLabel } from "./StyledComponents";
import { Div } from "../../ ShoppingCart/StyledComponents";
class FilteringSideBar extends Component {
  render() {
    console.log(this.props.shoppingstore.selectedSizes);
    return (
      <Div>
        <SizeLabel className="size-label">Sizes:</SizeLabel>
        <FilterBySize shoppingstore={this.props.shoppingstore} />
      </Div>
    );
  }
}
export default FilteringSideBar;
