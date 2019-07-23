import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

//import "./styles.css";
import CartItem from "./CartItem";
@observer
class CartItems extends Component {
  generate = () => {
    let samplearray = [];
    let cartItems = this.props.shoppingstore.cartstore.productsInCart;
    for (const v of cartItems.values()) {
      samplearray.push(
        <CartItem
          quantity={v.quantity}
          product={v.product}
          shoppingstore={this.props.shoppingstore}
          key={v.product.id}
        />
      );
    }
    return samplearray;
  };
  render() {
    return <div className="all-items-in-cart">{this.generate()}</div>;
  }
}
export default CartItems;
