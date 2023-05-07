import classNames from "classnames";
import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Account = ({ size = 30, className }) => {
  const navigate = useNavigate();
  return (
    <BiLogInCircle
      size={size}
      className={classNames(className, "cursor-pointer")}
      onClick={() => navigate("/login")}
    />
  );
};

export default Account;
