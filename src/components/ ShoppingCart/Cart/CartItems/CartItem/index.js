import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Div } from "../../../../ ShoppingCart/StyledComponents";
import {
  CartItemDisplay,
  ImageInCart,
  DeleteButton,
  ProductTitle,
  StrikeText,
  PriceSize,
  Quantity,
  Price
} from "./StyledComponets";
@observer
class CartItem extends Component {
  constructor(state) {
    super(state);
    this.state = {
      hover: false
    };
  }
  delete = () => {
    this.props.shoppingstore.cartstore.removeProductFromCart(
      this.props.product.id
    );
  };
  onmouse = () => {
    this.setState({
      hover: !this.state.hover
    });
  };
  render() {
    return (
      <Div>
        <CartItemDisplay>
          <Div>
            <ImageInCart src={this.props.product.image} />
          </Div>
          <Div onMouseOver={this.onmouse} onMouseLeave={this.onmouse}>
            <DeleteButton onClick={this.delete}>X</DeleteButton>
          </Div>
          <Div>
            <ProductTitle>
              {!this.state.hover ? (
                <Div>{this.props.product.title}</Div>
              ) : (
                <StrikeText>{this.props.product.title}</StrikeText>
              )}
            </ProductTitle>
            {!this.state.hover ? (
              <PriceSize>
                {this.props.product.availableSizes[0]}
                <Price>
                  {this.props.product.currencyFormat}
                  {this.props.product.price}
                </Price>
              </PriceSize>
            ) : (
              <PriceSize>
                <StrikeText>{this.props.product.availableSizes[0]}</StrikeText>
                <StrikeText>
                  {this.props.product.currencyFormat}
                  {this.props.product.price}
                </StrikeText>
              </PriceSize>
            )}
            {!this.state.hover ? (
              <Quantity>Quantity:{this.props.quantity}</Quantity>
            ) : (
              <StrikeText>Quantity:{this.props.quantity}</StrikeText>
            )}
          </Div>
        </CartItemDisplay>
      </Div>
    );
  }
}
export default CartItem;
