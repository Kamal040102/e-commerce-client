import React from "react";
import classNames from "classnames";

const SidebarContainer = ({ className, children }) => {
  return (
    <div
      className={classNames(
        className,
        "bg-base-300 -text-base-300 h-20 md:h-full md:w-1/6"
      )}
    >
      {children}
    </div>
  );
};

export default SidebarContainer;
