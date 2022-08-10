import { Fragment } from "react";
import { useState } from "react";

import Header from "./components/Layout/Header";
import Menu from "./components/Menu/Menu";

function App() {
  const [cartOrders, setCartOrders] = useState([]);

  const totalAmount = cartOrders.length;

  const addItemToCart = (item) => {
    setCartOrders((cartOrders) => {
      return [...cartOrders, item];
    });
  };

  const deleteItemFromCart = (id) => {
    setCartOrders((prevState) => {
      return prevState.filter((order) => order.itemId !== id);
    });
  };

  return (
    <Fragment>
      <Header
        cartOrders={cartOrders}
        totalAmount={totalAmount}
        deleteItemFromCart={deleteItemFromCart}
      />
      <main>
        <Menu addItemToCart={addItemToCart} />
      </main>
    </Fragment>
  );
}

export default App;
