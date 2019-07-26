import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { ProductPrices } from "./StyledComponents";
import { Div } from "../../../../ ShoppingCart/StyledComponents";
class ProductPrice extends Component {
  calculate = () => {
    return (this.props.price / this.props.installments).toFixed(2);
  };
  render() {
    return (
      <ProductPrices>
        <Div>
          {this.props.currencyFormat}
          {this.props.price}
        </Div>
        {this.props.installments > 0 ? (
          <Div>
            or {this.props.installments} x{this.props.currencyFormat}
            {this.calculate()}
          </Div>
        ) : null}
      </ProductPrices>
    );
  }
}
export default ProductPrice;
