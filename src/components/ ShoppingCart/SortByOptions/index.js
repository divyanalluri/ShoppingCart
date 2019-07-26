import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { Header, SortByOption, Option } from "./StyledComponents";
import { Div } from "../../ ShoppingCart/StyledComponents";
@observer
class SortByOptions extends Component {
  handleOrderBy = e => {
    this.props.shoppingstore.setSelectedOrderBy(e.target.value);
  };
  render() {
    return (
      <Header className="header">
        <Div>
          {this.props.shoppingstore.sortedFilterProducts.length} Product(s)
          found
        </Div>
        <Div>
          Order By:
          <SortByOption onChange={this.handleOrderBy}>
            <Option value="select">select</Option>
            <Option value="Lowest to Highest">Lowest to Highest</Option>
            <Option value="Highest to Lowest">Highest to Lowest</Option>
          </SortByOption>
        </Div>
      </Header>
    );
  }
}
export default SortByOptions;
