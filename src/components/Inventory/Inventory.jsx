import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inventory.css";
import Loading from "./../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  let { _id, name, price, description, img, quantity, supplierName } = product;
  if (isNaN(quantity)) quantity = 0;

  const [singleProductQuantity, setSingleProductQuantity] = useState(quantity);

  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://assignmenteleven.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSingleProductQuantity(parseFloat(quantity));
      });
  }, [id, quantity]);

  const handleDeliveredBtn = () => {
    // const updateQuantity = (parseFloat(quantity) - 1).toString();
    const updateQuantity = (parseFloat(singleProductQuantity) - 1).toString();
    const url = `https://assignmenteleven.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSingleProductQuantity(parseFloat(updateQuantity));
        // console.log(result);
        toast("Quantity updated successfully");
        // setTimeout(() => {
        //   navigate(`/inventory/${_id}`);
        // }, 2000);
      });
  };

  const handleIncreaseProduct = (event) => {
    event.preventDefault();
    const inputQuantity = event.target.quantity.value;
    const quantity = parseFloat(inputQuantity);
    // const previousQuantity = parseFloat(product.quantity);
    const previousQuantity = parseFloat(singleProductQuantity);
    if (quantity < 0) {
      toast("Please Enter a Positive Number");
      return;
    }

    const updateQuantity = (previousQuantity + quantity).toString();
    const url = `https://assignmenteleven.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updateQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSingleProductQuantity(parseFloat(updateQuantity));
        // console.log(result);
        event.target.reset();
        toast("Quantity updated successfully");
        // setTimeout(() => {
        //   navigate("/home");
        // }, 2000);
      });
  };

  return (
    <>
      <div className="inventory container mx-auto my-5">
        <PageTitle title="Inventory" />
        {/* <div className="card">
          <img src={img} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p>Supplier Name: {supplierName}</p>
            <h4>Price: $ {price}</h4>
            <p> */}
        {/* <small>Quantity: {quantity}</small> */}
        {/* <small>Quantity: {singleProductQuantity}</small>
            </p>
            <button
              disabled={parseFloat(singleProductQuantity) === 0}
              onClick={handleDeliveredBtn}
              className="btn btn-primary"
            >
              Delivered
            </button> */}
        {/* Button trigger modal  */}
        {/* <button
              type="button"
              className="btn btn-primary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Update Product
            </button>
          </div>
        </div> */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                style={{ height: "100%" }}
                src={img}
                className="img-fluid rounded-start"
                alt={name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p>Supplier Name: {supplierName}</p>
                <h4>Price: $ {price}</h4>
                <p>
                  <small>Quantity: {singleProductQuantity}</small>
                </p>
                {parseFloat(singleProductQuantity) === 0 ? (
                  <button disabled className="btn btn-danger">
                    Sold
                  </button>
                ) : (
                  <button
                    onClick={handleDeliveredBtn}
                    className="btn btn-primary"
                  >
                    Delivered
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleIncreaseProduct}>
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Restoke
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
