import React from "react";
import { setInLocalStorage } from "../../utils/localStorage/set";
import CartContext from "../../context/CartContext";
import { getQuantityOfItem } from "../../helpers/cartHelpers";
import Pagination from "../atoms/pagination";

const CartProductPagination = ({ setReRender, data, cart }) => {
  const addItem = () => {
    setInLocalStorage("cart", [...cart, data?._id]);
    setReRender(new Date().getTime());
  };

  const removeItem = () => {
    const idx = cart.indexOf(data?._id);
    cart.splice(idx, 1);
    setInLocalStorage("cart", cart);
    setReRender(new Date().getTime());
  };
  return (
    <Pagination
      rightOnClick={addItem}
      leftOnClick={removeItem}
      count={getQuantityOfItem(data?._id)}
      type="num"
    />
  );
};

export default CartProductPagination;
