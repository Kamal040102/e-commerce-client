import React from "react";
import LoginLayout from "../../layouts/loginLayout";
import ProductComponent from "../../components/organisms/product";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  return (
    <LoginLayout>
      <ProductComponent />
    </LoginLayout>
  );
};

export default Product;
