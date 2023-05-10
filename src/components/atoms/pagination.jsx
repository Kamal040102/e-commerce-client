import classNames from "classnames";
import React from "react";

const Pagination = ({
  className,
  label = "",
  count = 1,
  type = "arrow",
  color = "primary",
}) => {
  return (
    <div className={classNames(className, "btn-group")}>
      <button className={classNames(`btn-${color}`, "btn")}>
        {type === "arrow" ? "«" : "-"}
      </button>
      <button className={classNames(`btn-${color}`, "btn")}>
        {label} {count}
      </button>
      <button className={classNames(`btn-${color}`, "btn")}>
        {type === "arrow" ? "»" : "+"}
      </button>
    </div>
  );
};

export default Pagination;
