import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  CartInfo,
  Count,
  DisplayCart,
  CartImage,
  CartImageAfter,
  DefaultMessage,
  Div
} from "./StyledComponets";
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
@observer
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "cart-image",
      classes: "display-cart"
    };
  }
  onClick = () => {
    if (this.state.class == "cart-image") {
      this.setState({
        class: "cart-image-after"
      });
    } else {
      this.setState({
        class: "cart-image"
      });
    }
    if (this.state.classes == "display-cart") {
      this.setState({
        classes: "cart-items"
      });
    } else {
      this.setState({
        classes: "display-cart"
      });
    }
  };
  render() {
    return (
      <CartInfo className="cart" id="cart">
        {this.state.class == "cart-image" ? (
          <Div>
            <CartImage
              src="assets/cart.jpg"
              alt="cartimage"
              id="cart-image"
              className="cart-image"
              onClick={this.onClick}
            />
            <Count className="count">
              {this.props.shoppingstore.cartstore.totalProducts}
            </Count>
          </Div>
        ) : (
          <Div>
            <CartImageAfter className="cart-image-after" onClick={this.onClick}>
              X
            </CartImageAfter>
          </Div>
        )}
        {this.state.classes == "display-cart" ? (
          <DisplayCart>
            <CartHeader shoppingstore={this.props.shoppingstore} />
            {this.props.shoppingstore.cartstore.totalProducts > 0 ? (
              <CartItems shoppingstore={this.props.shoppingstore} />
            ) : (
              <DefaultMessage className="default-message">
                Add some products in the cart
              </DefaultMessage>
            )}
            <CartFooter shoppingstore={this.props.shoppingstore} />
          </DisplayCart>
        ) : (
          <DisplayCart display>
            <CartHeader shoppingstore={this.props.shoppingstore} />
            {this.props.shoppingstore.cartstore.totalProducts > 0 ? (
              <CartItems shoppingstore={this.props.shoppingstore} />
            ) : (
              <DefaultMessage className="default-message">
                Add some products in the cart
              </DefaultMessage>
            )}
            <CartFooter shoppingstore={this.props.shoppingstore} />
          </DisplayCart>
        )}
      </CartInfo>
    );
  }
}
export default Cart;
