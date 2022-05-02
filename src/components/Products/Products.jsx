import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();

  // useEffect(() => {
  //   const url = `http://localhost:5000/products`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center my-2">Products</h2>
        {products.length > 5
          ? products
              .slice(0, 6)
              .map((product) => <Product key={product._id} product={product} />)
          : products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
      </div>
      <Link to="/manageinventory">
        <button className="btn btn-primary w-25 mx-auto d-block my-3">
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Products;
