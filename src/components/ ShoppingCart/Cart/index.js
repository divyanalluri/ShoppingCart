import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
@observer
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "cart-image"
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
    var element = document.getElementById("display-cart");
    element.classList.toggle("cart-items");
  };
  render() {
    return (
      <div className="cart" id="cart">
        {this.state.class == "cart-image" ? (
          <div>
            <img
              src="assets/cart.jpg"
              alt="cartimage"
              id="cart-image"
              className="cart-image"
              onClick={this.onClick}
            />
            <div className="count">
              {this.props.shoppingstore.cartstore.totalProducts}
            </div>
          </div>
        ) : (
          <div>
            <button className="cart-image-after" onClick={this.onClick}>
              X
            </button>
          </div>
        )}
        <div className="display-cart" id="display-cart">
          <CartHeader shoppingstore={this.props.shoppingstore} />
          {this.props.shoppingstore.cartstore.totalProducts > 0 ? (
            <CartItems shoppingstore={this.props.shoppingstore} />
          ) : (
            <div className="default-message">Add some products in the cart</div>
          )}
          <CartFooter shoppingstore={this.props.shoppingstore} />
        </div>
      </div>
    );
  }
}
export default Cart;
