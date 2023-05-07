import React from "react";
import Rating from "../atoms/rating";
import classNames from "classnames";

const SellerInformation = ({ data, className }) => {
  return (
    <div className={classNames(className, "ml-5")}>
      <h4 className="text-lg text-primary">
        {data?.name || "Seller Name"}
        {"  "}
        <Rating rating={data?.rating || 4} />
      </h4>
      <ul>
        {data?.policies?.map((policy, key) => {
          return <li key={key}>{policy}</li>;
        })}
      </ul>
    </div>
  );
};

export default SellerInformation;
