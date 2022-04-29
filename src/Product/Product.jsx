import React from "react";

const Product = ({ product }) => {
  const { _id, name, price, description, img, quantity, supplierName } =
    product;
  return (
    <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Supplier Name: {supplierName}</p>
          <h4>Price: {price} $</h4>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
          <a href="/" className="btn btn-primary">
            Update Stock
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;