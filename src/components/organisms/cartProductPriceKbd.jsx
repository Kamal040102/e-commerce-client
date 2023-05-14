import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";

const CartProductPriceKbd = ({ className, amount = 0, quantity = 0 }) => {
  const { setTotal, total } = useContext(CartContext);

  return (
    <div className="w-1/2 flex justify-between items-center">
      <kbd className={classNames(className, "kbd")}>{amount}</kbd> *
      <kbd className={classNames(className, "kbd")}>{quantity}</kbd> =
      <kbd className={classNames(className, "kbd")}>{amount * quantity}</kbd>
    </div>
  );
};

export default CartProductPriceKbd;
