import React, { useContext, useEffect, useState } from "react";
import CartMain from "./cartMain";
import CartSidebar from "./cartSidebar";
import { getUniqueProductIds } from "../../helpers/cartHelpers";
import axios from "../../axios";
import { getCartProds } from "./api/cartComponent";
import CartContext from "../../context/CartContext";

const CartComponent = () => {
  const [prodIds, setProdIds] = useState([]);
  const [prods, setProds] = useState([]);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    setProdIds(getUniqueProductIds());
  }, []);

  useEffect(() => {
    if (prodIds.length > 0) {
      getCartProds(prodIds).then((data) => setProds(data));
    }
  }, [prodIds, cart]);

  return (
    <div className="flex flex-col md:flex-row h-full justify-between overflow-auto">
      <CartMain prods={prods} />
      <CartSidebar prods={prods} />
    </div>
  );
};

export default CartComponent;
