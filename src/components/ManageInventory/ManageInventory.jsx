import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center my-2">Products</h2>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
