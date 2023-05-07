import React from "react";
import CustomInput from "../atoms/input";
import { products } from "./data/sidebarProduct";
import SidebarProductCard from "./sidebarProductCard";
import MonocleAnimated from "../../assets/animated/monocle";

const SidebarProduct = () => {
  const [search, setSearch] = React.useState(null);
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      <CustomInput onChange={setSearch} className="h-8" placeholder="Search" />
      {products ? (
        <div className="hidden md:block">
          {products?.map((pro, key) => {
            return <SidebarProductCard key={key} data={pro} />;
          })}
        </div>
      ) : (
        <MonocleAnimated />
      )}
    </div>
  );
};

export default SidebarProduct;
