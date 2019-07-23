import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import "./styles.css";
import ProductImage from "./ProductImage";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductFooter from "./ProductFooter";

@observer
class Product extends Component {
  renderProducts = () => {
    return this.props.shoppingstore.sortedFilterProducts.map(product => (
      <div className="product-display">
        <ProductImage
          image={product.image}
          isFreeShipping={product.isFreeShipping}
        />
        <ProductName title={product.title} />
        <ProductPrice
          price={product.price}
          installments={product.installments}
          currencyFormat={product.currencyFormat}
        />
        <ProductFooter
          shoppingstore={this.props.shoppingstore}
          cartstore={this.props.cartstore}
          id={product.id}
        />
      </div>
    ));
  };

  render() {
    const {
      image,
      isFreeShipping,
      title,
      price,
      currencyFormat,
      installments
    } = this.props.shoppingstore.productList;
    console.log(this.title);
    return <div className="products-list">{this.renderProducts()}</div>;
  }
}
export default Product;
