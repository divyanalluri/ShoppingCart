import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  CartFooterCart,
  Div,
  CheckoutButton,
  TotalPrice,
  TotalInstallments,
  SubTotal,
  Checkout
} from "./StyledComponets";
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
      <CartFooterCart className="cart-footer">
        <SubTotal className="subtotal">
          <Div>SUBTOTAL</Div>
          <TotalPrice className="total-price">
            ${this.props.shoppingstore.cartstore.totalPrice}
          </TotalPrice>
        </SubTotal>
        {this.props.shoppingstore.cartstore.installments > 0 ? (
          <TotalInstallments className="total-installments">
            OR UP TO {this.props.shoppingstore.cartstore.installments}*
            {this.calculate()}
          </TotalInstallments>
        ) : null}

        <Div>
          <CheckoutButton className="checkout-button">
            <Checkout className="checkout">CHECKOUT</Checkout>
          </CheckoutButton>
        </Div>
      </CartFooterCart>
    );
  }
}
export default CartFooter;
