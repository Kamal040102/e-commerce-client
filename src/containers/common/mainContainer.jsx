import React from "react";
import classNames from "classnames";

const MainContainer = ({ className, children }) => {
  return (
    <div className={classNames(className, "flex flex-col h-screen w-screen")}>
      {children}
    </div>
  );
};

export default MainContainer;
