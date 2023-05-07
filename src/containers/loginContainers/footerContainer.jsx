import React from "react";
import classNames from "classnames";

const FooterContainer = ({ className, children }) => {
  return <div className={classNames(className, "h-10-per")}>{children}</div>;
};

export default FooterContainer;
