import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import FilteringSideBar from "./FilteringSideBar";
import SortByOptions from "./SortByOptions";
import Products from "./Products";
import Cart from "./Cart";
import { Div, Shopping } from "./StyledComponents";
class ShoppingCart extends Component {
  render() {
    return (
      <Div className="shopping-cart">
        <Div>
          <Cart shoppingstore={this.props.shoppingstore} />
        </Div>
        <Shopping className="shopping">
          <Div>
            <FilteringSideBar shoppingstore={this.props.shoppingstore} />
          </Div>
          <Div>
            <SortByOptions shoppingstore={this.props.shoppingstore} />
            <Products
              shoppingstore={this.props.shoppingstore}
              cartstore={this.props.cartstore}
            />
          </Div>
        </Shopping>
      </Div>
    );
  }
}
export default ShoppingCart;
