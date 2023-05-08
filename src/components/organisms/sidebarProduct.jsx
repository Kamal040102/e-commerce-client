import React from "react";
import CustomInput from "../atoms/input";
import { getAllProducts } from "./api/sidebarProduct";
import SidebarProductCard from "./sidebarProductCard";
import MonocleAnimated from "../../assets/animated/monocle";

const SidebarProduct = () => {
  const [search, setSearch] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  React.useEffect(() => {
    getAllProducts(search).then((data) => {
      setProducts(data);
    });
  }, [search]);

  return (
    <div className="w-full overflow-y-auto scroll-smooth min-h-full">
      <CustomInput onChange={setSearch} className="h-8" placeholder="Search" />
      {products && products.length > 0 ? (
        <div className="hidden md:block">
          {products?.map((pro, key) => {
            return <SidebarProductCard key={key} data={pro} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <MonocleAnimated height={120} width={120} />
        </div>
      )}
    </div>
  );
};

export default SidebarProduct;
