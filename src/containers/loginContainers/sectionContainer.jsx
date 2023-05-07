import React from "react";
import classNames from "classnames";

const SectionContainer = ({ className, children }) => {
  return (
    <div
      className={classNames(className, "flex flex-col md:flex-row h-90-per")}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
