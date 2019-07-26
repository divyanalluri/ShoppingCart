import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { ProductTitle } from "./StyledComponents";
class ProductName extends Component {
  render() {
    return (
      <ProductTitle className="product-title">{this.props.title}</ProductTitle>
    );
  }
}
export default ProductName;
