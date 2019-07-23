import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";
@observer
class CartFooter extends Component {
  calculate = () => {
    return (
      this.props.shoppingstore.cartstore.totalPrice /
      this.props.shoppingstore.cartstore.installments
    ).toFixed(2);
  };
  render() {
    return (
      <div className="cart-footer">
        <div className="subtotal">
          <div>SUBTOTAL</div>
          <div className="total-price">
            ${this.props.shoppingstore.cartstore.totalPrice}
          </div>
        </div>
        {this.props.shoppingstore.cartstore.installments > 0 ? (
          <div className="total-installments">
            OR UP TO {this.props.shoppingstore.cartstore.installments}*
            {this.calculate()}
          </div>
        ) : null}

        <div>
          <div className="checkout-button">
            <center className="checkout">CHECKOUT</center>
          </div>
        </div>
      </div>
    );
  }
}
export default CartFooter;
