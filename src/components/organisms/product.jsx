import React, { useContext, useEffect, useState } from "react";
import Rating from "../atoms/rating";
import SellerInformation from "./sellerInformation";
import RocketAnimated from "../../assets/animated/rocket";
import CustomFullScreenLoader from "../atoms/loader";
import { setInLocalStorage } from "../../utils/localStorage/set";
import { getCart } from "../../utils/localStorage/get";
import customToast from "../atoms/toast";
import Pagination from "../atoms/pagination";
import { getQuantityOfItem } from "../../helpers/cartHelpers";
import CartContext from "../../context/CartContext";
import CartProductPagination from "./cartProductPagination";

const ProductComponent = ({ data }) => {
  const { cart, setCart } = useContext(CartContext);
  const [reRender, setReRender] = useState(new Date().getTime());

  const handleClick = (e) => {
    e.preventDefault();
    setInLocalStorage("cart", [...cart, data?._id]);
    setReRender(new Date().getTime());
    customToast("Item added to cart", "success");
  };

  useEffect(() => {
    setCart(getCart());
  }, [reRender]);
  return data ? (
    <div className="h-full flex flex-col p-5">
      <div className="flex flex-col md:flex-row h-100">
        <div className="md:w-1/2 flex flex-col items-center gap-y-5">
          <img
            className="h-64 md:h-96"
            src={data?.product_images[0]}
            alt="image"
          />
          {cart?.includes(data?._id) ? (
            <CartProductPagination
              cart={cart}
              data={data}
              setReRender={setReRender}
            />
          ) : (
            <button className="btn btn-primary" onClick={handleClick}>
              Add to Cart
            </button>
          )}
        </div>
        <div className="flex flex-col gap-y-5 md:w-1/2 p-5">
          <h2 className="text-3xl font-extrabold">
            {data?.product_name},{" "}
            <span className="text-lg font-thin">{data?.product_category}</span>
          </h2>
          <p className="h-1/2 overflow-y-auto">{data?.product_description}</p>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg">Seller Information:</h4>
            <SellerInformation data={data?.seller} />
          </div>
        </div>
      </div>
      {/* <div className="flex">Reviews Section</div> */}
    </div>
  ) : (
    <CustomFullScreenLoader
      className="h-full"
      fullScreen={false}
      message={false}
    />
  );
};

export default ProductComponent;
