import classNames from "classnames";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const HomeComponent = ({ size = 30, className, badgeCount = 0, onClick }) => {
  return (
    <AiOutlineHome
      onClick={onClick}
      size={size}
      className={classNames(className, "cursor-pointer")}
    />
  );
};

export default HomeComponent;
