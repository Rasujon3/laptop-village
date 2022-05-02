import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { toast } from "react-toastify";

const Product = ({ product, handleDeleteProduct }) => {
  const { _id, name, price, description, img, quantity, supplierName } =
    product;

  return (
    <>
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p>Supplier Name: {supplierName}</p>
            <h4>Price: $ {price}</h4>
            <p>
              <small>Quantity: {quantity}</small>
            </p>
            <Link to={`/inventory/${_id}`} className="btn btn-primary">
              Update Stock
            </Link>
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="btn btn-danger ms-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
