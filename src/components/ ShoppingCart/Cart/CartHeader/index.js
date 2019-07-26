import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { CartImageCart, NoOfItems, Div, Cartimage } from "./StyledComponets";
class CartHeader extends Component {
  render() {
    return (
      <CartImageCart>
        <Div className="">
          <Cartimage
            src="assets/cart.jpg"
            alt="cartimage"
            className="cartimage"
          />
        </Div>
        <Div>Cart</Div>
        <NoOfItems className="no-of-cart-items">
          {this.props.shoppingstore.cartstore.totalProducts}
        </NoOfItems>
      </CartImageCart>
    );
  }
}
export default CartHeader;
