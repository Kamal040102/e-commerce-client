import classNames from "classnames";
import React from "react";

const Kbd = ({ label, className }) => {
  return <kbd className={classNames(className, "kbd")}>{label}</kbd>;
};

export default Kbd;
