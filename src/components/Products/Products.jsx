import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useProducts();
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure to delete this product?");
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
          toast("Deleted Successfully");
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center my-2">Products</h2>
        {products.length > 5
          ? products
              .slice(0, 6)
              .map((product) => <Product key={product._id} product={product} />)
          : products.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
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
