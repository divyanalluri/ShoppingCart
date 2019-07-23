import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

class ProductName extends Component {
  render() {
    return <div className="product-title">{this.props.title}</div>;
  }
}
export default ProductName;
