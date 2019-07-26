import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { AddToCartButton } from "./StyledComponents";
class ProductFooter extends Component {
  addToCart = () => {
    this.props.shoppingstore.cartstore.addProductToCart(this.props.id);
  };
  render() {
    return (
      <AddToCartButton onClick={this.addToCart} hover={this.props.hover}>
        Add to Cart
      </AddToCartButton>
    );
  }
}
export default ProductFooter;
