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
      const url = `https://assignmenteleven.herokuapp.com/product/${id}`;
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
    <>
      <h2 className="text-center mt-5">Products</h2>
      <hr
        className="mb-4 mt-0 d-block mx-auto text-center"
        style={{
          width: "60px",
          backgroundColor: "#00dafc",
          height: "2px",
        }}
      />
      <div className="container">
        <div className="row">
          {products.length > 5
            ? products
                .slice(0, 6)
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))
            : products.map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
        </div>
        <Link to="/manageinventory">
          <button
            disabled={products.length === 0 ? true : false}
            className="btn btn-primary mx-auto d-block my-3 grow"
          >
            Manage Inventories
          </button>
        </Link>
      </div>
    </>
  );
};

export default Products;
