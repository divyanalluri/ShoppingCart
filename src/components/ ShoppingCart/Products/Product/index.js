import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductFooter from "./ProductFooter";
import { ProductDisplay } from "./StyledComponents";
@observer
class Product extends Component {
  state = {
    hover: false
  };
  onMouse = () => {
    this.setState(prevState => ({
      hover: !prevState.hover
    }));
  };

  render() {
    const {
      image,
      isFreeShipping,
      title,
      price,
      currencyFormat,
      installments,
      id
    } = this.props.product;
    return (
      <div className="products-list">
        <ProductDisplay onMouseEnter={this.onMouse} onMouseLeave={this.onMouse}>
          <ProductImage image={image} isFreeShipping={isFreeShipping} />
          <ProductName title={title} />
          <ProductPrice
            price={price}
            installments={installments}
            currencyFormat={currencyFormat}
          />
          <ProductFooter
            shoppingstore={this.props.shoppingstore}
            id={id}
            hover={this.state.hover}
          />
        </ProductDisplay>
      </div>
    );
  }
}
export default Product;
