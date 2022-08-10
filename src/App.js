import { Fragment } from "react";
import { useState } from "react";

import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";

function App() {
  const [cartOrders, setCartOrders] = useState([]);

  
  const totalAmount = cartOrders.length;

  const addItemToCart = (item) => {
    setCartOrders((artOrders) => {
      return [...cartOrders, item];
    });
  };

  return (
    <Fragment>
      <Header
        cartOrders={cartOrders}
        totalAmount={totalAmount}
      />
      <main>
        <Menu addItemToCart={addItemToCart} />
      </main>
    </Fragment>
  );
}

export default App;
