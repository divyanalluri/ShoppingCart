import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

class ProductImage extends Component {
  render() {
    return (
      <div>
        <div className="image">
          <img src={this.props.image} />
          {this.props.isFreeShipping ? (
            <button className="free-shipping-button">Free Shipping</button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default ProductImage;
