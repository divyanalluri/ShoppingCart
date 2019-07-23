import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

class ProductFooter extends Component {
  addToCart = () => {
    this.props.shoppingstore.cartstore.addProductToCart(this.props.id);
  };
  render() {
    return (
      <div>
        <button className="add-to-cart-button" onClick={this.addToCart}>
          Add to Cart
        </button>
      </div>
    );
  }
}
export default ProductFooter;
