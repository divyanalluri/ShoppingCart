import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";

class ProductPrice extends Component {
  calculate = () => {
    return (this.props.price / this.props.installments).toFixed(2);
  };
  render() {
    return (
      <div className="product-price">
        <div>
          {this.props.currencyFormat}
          {this.props.price}
        </div>
        {this.props.installments > 0 ? (
          <div>
            or {this.props.installments} x{this.props.currencyFormat}
            {this.calculate()}
          </div>
        ) : null}
      </div>
    );
  }
}
export default ProductPrice;
