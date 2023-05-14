import React, { useContext, useEffect, useState } from "react";
import MonocleAnimated from "../../assets/animated/monocle";
import CartProductPagination from "./cartProductPagination";
import CartContext from "../../context/CartContext";
import { getCart } from "../../utils/localStorage/get";
import CartProductPriceKbd from "./cartProductPriceKbd";
import { getQuantityOfItem } from "../../helpers/cartHelpers";

const CartProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  const [reRender, setReRender] = useState(new Date().getTime());

  useEffect(() => {
    setCart(getCart());
  }, [reRender]);
  return (
    <div className="card card-side bg-base-300 shadow-xl mx-5">
      <img
        width={140}
        height="auto"
        src={prod.product_images[0]}
        alt="Product"
        className="rounded-s-xl"
      />
      <div className="card-body">
        <h2 className="card-title">{prod.product_name}</h2>
        <p className="h-20 overflow-y-auto">{prod.product_description}</p>
        <div className="card-actions justify-between items-center">
          <CartProductPriceKbd
            amount={prod.product_price}
            quantity={getQuantityOfItem(prod._id)}
          />
          <CartProductPagination
            cart={cart}
            setReRender={setReRender}
            data={prod}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
