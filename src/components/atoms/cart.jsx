import classNames from "classnames";
import React from "react";
import { BsCart4, BsFillCartFill } from "react-icons/bs";

const Cart = ({ size = 30, className }) => {
  return (
    <BsCart4 size={size} className={classNames(className, "cursor-pointer")} />
  );
};

export default Cart;
