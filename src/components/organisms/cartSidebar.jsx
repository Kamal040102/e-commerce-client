import React from "react";
import CartSidebarSummary from "./cartSidebarSummary";

const CartSidebar = ({ prods }) => {
  return (
    <div className="md:w-1/4 px-5 bg-base-300 p-10">
      <h3 className="text-3xl font-semibold">Summary</h3>
      <CartSidebarSummary prods={prods} />
    </div>
  );
};

export default CartSidebar;
