import React from "react";
import CartProduct from "./cartProduct";

const CartMain = ({ prods }) => {
  return (
    <div className="flex flex-col w-full p-10 md:w-3/4">
      <h2 className="text-5xl font-semibold tracking-wide">My Cart</h2>
      <div className="overflow-y-auto my-5 flex flex-col gap-y-5">
        {prods.length > 0
          ? prods?.map((prod, key) => {
              return <CartProduct key={key} prod={prod} />;
            })
          : "Your Cart is Empty"}
      </div>
    </div>
  );
};

export default CartMain;
