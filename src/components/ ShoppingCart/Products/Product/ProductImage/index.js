import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { Image, FreeShippingButton } from "./StyledComponents";
class ProductImage extends Component {
  render() {
    return (
      <Image>
        <img src={this.props.image} />
        {this.props.isFreeShipping ? (
          <FreeShippingButton>Free Shipping</FreeShippingButton>
        ) : null}
      </Image>
    );
  }
}
export default ProductImage;
