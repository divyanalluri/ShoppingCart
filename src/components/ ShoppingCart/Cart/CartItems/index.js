import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

//import "./styles.css";
import { AllCartItems } from "./StyledComponets";
import { Div } from "../../../ ShoppingCart/StyledComponents";
import CartItem from "./CartItem";
@observer
class CartItems extends Component {
  generate = () => {
    let samplearray = [];
    let cartItems = this.props.shoppingstore.cartstore.productsInCart;
    for (const v of cartItems.values()) {
      samplearray.push(
        <Div>
          <CartItem
            quantity={v.quantity}
            product={v.product}
            shoppingstore={this.props.shoppingstore}
            key={v.product.id}
          />
        </Div>
      );
    }
    return samplearray;
  };
  render() {
    return (
      <AllCartItems className="all-items-in-cart">
        {this.generate()}
      </AllCartItems>
    );
  }
}
export default CartItems;
