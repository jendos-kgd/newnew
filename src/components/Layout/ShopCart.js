import { FaShoppingCart } from "react-icons/fa";
import classes from "./ShopCart.module.css";
import { useState } from "react";

const ShopCart = (props, itemId) => {
  let [cartOpen, setCartOpen] = useState(false);

  let totalPrice = 0;
  const cart = props.cartOrders.map((order) => {
    totalPrice = totalPrice + order.price;

    return (
      <li key={Math.random()}>
        <div>{order.dish}</div>
        <div>{order.price} ₪</div>
      </li>
    );
  });
  return (
    <div>
      <button className={classes.btn}>
        <h3>{props.totalAmount}</h3>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`{classes['shop-card-button']} ${cartOpen && "active"}`}
        />
      </button>
      {cartOpen && (
        <div className={classes["shop-card"]}>
          <h1 className={classes["shop-card-h1"]}>Cart Orders</h1>
          <ol className={classes.ol}>{cart}</ol>
          <footer className={classes["shop-card-footer"]}>
            <h3 className={classes.h3}>Summa: {totalPrice} ₪ </h3>
            <h3 className={classes.h3}>Check orders:</h3>
          </footer>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
