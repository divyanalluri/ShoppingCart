import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import FilterBySize from "./FilterBySize";
import "./styles.css";

class FilteringSideBar extends Component {
  render() {
    console.log(this.props.shoppingstore.selectedSizes);
    return (
      <div className="size-label">
        Sizes:
        <div>
          <FilterBySize shoppingstore={this.props.shoppingstore} />
        </div>
      </div>
    );
  }
}
export default FilteringSideBar;
