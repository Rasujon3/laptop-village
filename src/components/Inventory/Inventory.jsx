import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { _id, name, price, description, img, quantity, supplierName } =
    product;
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="inventory container mx-auto">
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
          <Link to={`/inventory/${_id}`} className="btn btn-primary">
            Update Stock
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
