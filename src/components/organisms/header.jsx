import React, { useState } from "react";
import classNames from "classnames";
import Title from "../atoms/title";
import Cart from "../atoms/cart";
import Account from "../atoms/account";
import SidebarProduct from "./sidebarProduct";

const Header = ({ className }) => {
  return (
    <div
      className={classNames(
        className,
        "flex flex-row md:flex-col justify-between px-4 md:p- h-full items-center gap-x-5"
      )}
    >
      <Title fullTitle={import.meta.env.VITE_APP_PROJECT_TITLE} />
      <SidebarProduct />
      <div className="flex justify-around gap-x-5 md:gap-x-10">
        <Cart />
        <Account />
      </div>
    </div>
  );
};

export default Header;
