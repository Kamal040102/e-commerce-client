import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotalAmount } from "../../helpers/cartHelpers";
import customToast from "../atoms/toast";

const Item = ({ label, value, className }) => {
  return (
    <li>
      <div className={classNames(className, "w-full flex justify-between")}>
        <span className="w-1/2">{label}</span>
        <span>Rs. {value}</span>
      </div>
    </li>
  );
};

const CartSidebarSummary = ({ prods }) => {
  const [deliveryCharge, setDeliveryCharge] = useState(
    import.meta.env.VITE_APP_FIXED_DELIVERY_CHARGE
  );
  const [tax, setTax] = useState(import.meta.env.VITE_APP_TAX_PERCENTAGE);
  const [subTotal, setSubTotal] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setSubTotal(getCartTotalAmount(prods));
  }, []);

  useEffect(() => {
    setSubTotal(getCartTotalAmount(prods));
  }, [cart]);

  return (
    <div className="my-5 bg-base-200 p-5 rounded-xl flex flex-col gap-y-5">
      <ul className="flex flex-col gap-y-5">
        <Item label="Subtotal" value={subTotal.toFixed(2)} />
        <Item
          label="Estimated Shipping & Handling"
          value={
            subTotal > 1999 ? 0 : subTotal == 0 ? 0 : parseInt(deliveryCharge)
          }
        />
        <Item
          label={`Estimated Tax (${tax}%)`}
          value={(subTotal * (tax / 100)).toFixed(2)}
        />
        <hr />
        <Item
          className="font-extrabold"
          label="Total"
          value={(
            subTotal +
            subTotal * 0.18 +
            (subTotal > 1999 ? 0 : subTotal == 0 ? 0 : parseInt(deliveryCharge))
          ).toFixed(2)}
        />
        <hr />
      </ul>
      <button
        onClick={(e) => customToast("Checkout is under development.", "info")}
        className={`btn btn-primary w-full ${
          subTotal > 0 ? null : "btn-disabled"
        }`}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CartSidebarSummary;
