import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";
import PageTitle from "../PageTitle/PageTitle";
import Product from "../Product/Product";

const ManageInventory = () => {
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
      <PageTitle title="Manage Inventory" />
      <div className="row">
        <h2 className="text-center my-2">Products</h2>
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
      <Link to="/addinventoryitem">
        <button className="btn btn-primary w-25 mx-auto d-block my-3">
          Add New Product
        </button>
      </Link>
    </div>
  );
};

export default ManageInventory;
