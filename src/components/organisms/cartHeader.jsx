import React, { useContext } from "react";
import classNames from "classnames";
import Title from "../atoms/title";
import Cart from "../atoms/cart";
import Account from "../atoms/account";
import SidebarProduct from "./sidebarProduct";
import { useNavigate } from "react-router-dom";
import customToast from "../atoms/toast";
import HomeComponent from "../atoms/home";

const CartHeader = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        className,
        "flex flex-row md:flex-col justify-between px-4 h-90-per items-center gap-x-5"
      )}
    >
      <Title fullTitle={import.meta.env.VITE_APP_PROJECT_TITLE} />
      <SidebarProduct />
      <div className="flex justify-around gap-x-5 md:gap-x-10">
        <HomeComponent onClick={(e) => navigate(-1)} />
        <Account />
      </div>
    </div>
  );
};

export default CartHeader;
