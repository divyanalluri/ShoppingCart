import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { status } from "../../../stores/ShoppingStore/constants";
import Product from "./Product";
import "./styles.css";
import Loading from "../Loading";
import Error from "../Error";
@observer
class Products extends Component {
  componentDidMount() {
    this.props.shoppingstore.getProducts();
  }
  render() {
    return (
      <div>
        <div className="products-list">
          {this.props.shoppingstore.success === status.success ? (
            <Product
              shoppingstore={this.props.shoppingstore}
              cartstore={this.props.cartstore}
            />
          ) : null}
          {this.props.shoppingstore.success === status.loading ? (
            <Loading />
          ) : null}
          {this.props.shoppingstore.success === status.error ? <Error /> : null}
          )}
        </div>
      </div>
    );
  }
}
export default Products;
