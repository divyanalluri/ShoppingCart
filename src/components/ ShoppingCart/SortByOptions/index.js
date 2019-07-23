import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";
@observer
class SortByOptions extends Component {
  handleOrderBy = e => {
    this.props.shoppingstore.setSelectedOrderBy(e.target.value);
  };
  render() {
    return (
      <div className="header">
        <div>
          {this.props.shoppingstore.sortedFilterProducts.length} Product(s)
          found
        </div>
        <div>
          Order By:
          <select className="sortby-options" onChange={this.handleOrderBy}>
            <option value="select">select</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
            <option value="Highest to Lowest">Highest to Lowest</option>
          </select>
        </div>
      </div>
    );
  }
}
export default SortByOptions;
