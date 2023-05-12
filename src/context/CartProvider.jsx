import React, { useState } from "react";
import CartContext from "./CartContext";
import { getCart } from "../utils/localStorage/get";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCart());
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
