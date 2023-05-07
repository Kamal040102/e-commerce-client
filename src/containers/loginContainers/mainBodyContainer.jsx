import React from "react";
import classNames from "classnames";

const MainBodyContainer = ({ className, children }) => {
  return (
    <div className={classNames(className, "h-full md:w-5/6 overflow-y-auto")}>
      {children}
    </div>
  );
};

export default MainBodyContainer;
