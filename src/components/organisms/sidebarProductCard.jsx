import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarProductCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${data?._id}`)}
      className="bg-base-300 my-2 rounded-lg flex p-2 gap-x-1 cursor-pointer"
    >
      <img src={data?.product_images[0]} alt={"img"} width={60} height={60} />
      <div className="flex flex-col w-full">
        <h3>
          <b>{data?.product_name}</b>
        </h3>
        <h4 className="text-sm">
          <i>{data?.product_category}</i>
        </h4>
        <h4 className="text-sm text-end">Rs. {data?.product_price}</h4>
      </div>
    </div>
  );
};

export default SidebarProductCard;
