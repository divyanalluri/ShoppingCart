import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

class CartHeader extends Component {
  render() {
    return (
      <div className="cart-image-cart">
        <div className="">
          <img src="assets/cart.jpg" alt="cartimage" className="cartimage" />
        </div>
        <div>Cart</div>
        <div className="no-of-cart-items">
          {this.props.shoppingstore.cartstore.totalProducts}
        </div>
      </div>
    );
  }
}
export default CartHeader;
