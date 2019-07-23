import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import FilteringSideBar from "./FilteringSideBar";
import SortByOptions from "./SortByOptions";
import Products from "./Products";
import Cart from "./Cart";
import "./styles.css";

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <div>
          <Cart shoppingstore={this.props.shoppingstore} />
        </div>
        <div className="shopping">
          <div>
            <FilteringSideBar shoppingstore={this.props.shoppingstore} />
          </div>
          <div>
            <SortByOptions shoppingstore={this.props.shoppingstore} />
            <Products
              shoppingstore={this.props.shoppingstore}
              cartstore={this.props.cartstore}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
