import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import { status } from "./constants";

import ProductModel from "../models/ProductModel";
import CartStore from "../CartStore";
import { list } from "postcss";
import { loadPartialConfig } from "@babel/core";
class ShoppingStore {
  @observable productList = [];
  @observable selectedOrderBy = "";
  @observable selectedSizes = [];
  @observable success;
  constructor() {
    this.cartstore = new CartStore(this);
  }

  setSelectedOrderBy(value) {
    this.selectedOrderBy = value;
  }
  addToSelectedSizes(size) {
    this.selectedSizes.push(size);
  }
  removeFromSelectedSizes(size) {
    this.selectedSizes.remove(size);
  }

  getProducts() {
    this.success = status.loading;
    fetch("https://demo8129378.mockable.io/products/all/v1")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then(p => {
        this.success = status.success;
        this.productList = p.products;
      })
      .catch(err => (this.success = status.error));
  }
  @computed
  get sortedFilterProducts() {
    if (this.selectedSizes.length > 0 || this.selectedOrderBy != "") {
      const filteredProducts = [];
      this.productList.map(product => {
        this.selectedSizes.map(size => {
          if (product.availableSizes.includes(size)) {
            if (!filteredProducts.includes(product)) {
              filteredProducts.push(product);
            }
          }
        });
      });
      if (this.selectedSizes.length == 0) {
        this.productList.map(product => filteredProducts.push(product));
      }
      if (this.selectedOrderBy == "Lowest to Highest") {
        filteredProducts.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (this.selectedOrderBy == "Highest to Lowest") {
        filteredProducts.sort(function(a, b) {
          return b.price - a.price;
        });
      }
      console.log("products" + filteredProducts);
      return filteredProducts;
    }
    return this.productList;
  }
}
export default ShoppingStore;
