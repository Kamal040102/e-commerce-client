import classNames from "classnames";
import React, { useEffect } from "react";
import { BsCart4, BsFillCartFill } from "react-icons/bs";

const Cart = ({ size = 30, className, badgeCount = 0, onClick }) => {
  return (
    <div onClick={onClick} className="indicator">
      <span className="indicator-item badge badge-secondary">{badgeCount}</span>
      <BsCart4
        size={size}
        className={classNames(className, "cursor-pointer")}
      />
    </div>
  );
};

export default Cart;
