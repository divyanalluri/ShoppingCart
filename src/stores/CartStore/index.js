import { observable, computed, action } from "mobx";

class CartStore {
  shoppingstore = [];
  @observable cartMap = new Map();
  constructor(shoppingstore) {
    this.shoppingstore = shoppingstore;
  }
  addProductToCart(id) {
    if (this.cartMap.has(id)) {
      this.cartMap.set(id, this.cartMap.get(id) + 1);
    } else {
      this.cartMap.set(id, 1);
    }
    console.log(this.shoppingstore.productList);
  }
  removeProductFromCart(id) {
    this.cartMap.delete(id);
  }
  @computed
  get totalProducts() {
    let value = 0;
    for (const v of this.cartMap.values()) {
      value = value + v;
    }
    return value;
  }
  @computed
  get productsInCart() {
    let cartProducts = new Map();
    const filtereddata = [];
    for (const [k, v] of this.cartMap) {
      this.shoppingstore.productList.map(product => {
        if (product.id === k) {
          cartProducts.set(product.id, { product: product, quantity: v });
          filtereddata.push(product);
        }
      });
    }
    return cartProducts;
  }

  @computed
  get totalPrice() {
    var value = 0;
    for (const [k, v] of this.cartMap) {
      this.shoppingstore.productList.map(product => {
        if (product.id === k) {
          value = value + product.price * v;
        }
      });
    }
    return value.toFixed(2);
  }
  @computed
  get installments() {
    var value = 0;
    for (const [k, v] of this.cartMap) {
      this.shoppingstore.productList.map(product => {
        if (product.id === k) {
          value = product.installments * v + value;
        }
      });
    }
    return value;
  }
}
export default CartStore;
