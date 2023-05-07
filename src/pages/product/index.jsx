import React from "react";
import LoginLayout from "../../layouts/loginLayout";
import ProductComponent from "../../components/organisms/product";
import { useLocation } from "react-router-dom";
import getProduct from "./api/getProduct";

const Product = () => {
  const [data, setData] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    getProduct(location.pathname.split("/")[2]).then((product) =>
      setData(product)
    );
  }, [location]);

  return (
    <LoginLayout>
      <ProductComponent data={data} />
    </LoginLayout>
  );
};

export default Product;
