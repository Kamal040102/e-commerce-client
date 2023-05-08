import React from "react";
import CustomInput from "../atoms/input";
import { getAllProducts } from "./api/sidebarProduct";
import SidebarProductCard from "./sidebarProductCard";
import MonocleAnimated from "../../assets/animated/monocle";

const SidebarProduct = () => {
  const [search, setSearch] = React.useState("");
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
    <div className="w-full overflow-y-auto scroll-smooth md:min-h-full">
      <CustomInput onChange={setSearch} className="h-8" placeholder="Search" />
      {products && products.length > 0 ? (
        <>
          <div className="hidden md:block">
            {products?.map((pro, key) => {
              return <SidebarProductCard key={key} data={pro} />;
            })}
          </div>
          {search.length > 0 && (
            <ul className="p-2 shadow bg-base-100 rounded-box top-16 absolute max-h-96 w-2/3 md:hidden flex flex-col overflow-y-auto">
              {products?.map((pro, key) => {
                return (
                  <li key={key}>
                    <SidebarProductCard data={pro} />
                  </li>
                );
              })}
            </ul>
          )}
        </>
      ) : (
        <>
          <div className="hidden md:flex md:flex-col justify-center items-center h-full gap-y-5">
            <MonocleAnimated height={120} width={120} />
            <p className="text-center">No Matching Product Found</p>
          </div>
          <ul className="p-2 shadow bg-base-100 rounded-box top-16 absolute max-h-96 w-2/3 md:hidden flex overflow-y-auto items-center gap-x-3">
            <MonocleAnimated height={20} width={20} />
            <p>No Matching Product Found</p>
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarProduct;
