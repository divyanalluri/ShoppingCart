import React from "react";
import { observer } from "mobx-react";

import ShoppingCart from "./components/ ShoppingCart";
import ShoppingStore from "./stores/ShoppingStore";
import CartStore from "./stores/CartStore";

var shoppingstore = new ShoppingStore();
var cartstore = new CartStore();
function App() {
  return (
    <div className="App">
      <ShoppingCart shoppingstore={shoppingstore} cartstore={cartstore} />
    </div>
  );
}

export default App;
