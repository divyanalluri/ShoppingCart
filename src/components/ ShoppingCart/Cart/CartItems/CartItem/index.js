import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

@observer
class CartItem extends Component {
  constructor(state) {
    super(state);
    this.state = {
      hover: false
    };
  }
  delete = () => {
    this.props.shoppingstore.cartstore.removeProductFromCart(
      this.props.product.id
    );
  };
  onmouse = () => {
    this.setState({
      hover: !this.state.hover
    });
  };
  render() {
    return (
      <div className="cart-item-display">
        <div className="image-in-cart">
          <img className="image-in-cart" src={this.props.product.image} />
        </div>
        <div onMouseOver={this.onmouse} onMouseLeave={this.onmouse}>
          <button className="delete-button" onClick={this.delete}>
            X
          </button>
        </div>
        <div>
          <div className="product-title">
            {!this.state.hover ? (
              <div>{this.props.product.title}</div>
            ) : (
              <strike>{this.props.product.title}</strike>
            )}
          </div>
          {!this.state.hover ? (
            <div className="price-sizes">
              {this.props.product.availableSizes[0]}
              <div className="price">
                {this.props.product.currencyFormat}
                {this.props.product.price}
              </div>
            </div>
          ) : (
            <div className="price-sizes">
              <strike>{this.props.product.availableSizes[0]}</strike>
              <strike className="price">
                {this.props.product.currencyFormat}
                {this.props.product.price}
              </strike>
            </div>
          )}
          {!this.state.hover ? (
            <div className="quantity">Quantity:{this.props.quantity}</div>
          ) : (
            <strike className="quantity">Quantity:{this.props.quantity}</strike>
          )}
        </div>
      </div>
    );
  }
}
export default CartItem;
