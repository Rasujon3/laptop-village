import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import "./AddInventoryItem.css";

const AddInventoryItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://assignmenteleven.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast("Product add successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  };
  return (
    <div data-aos="zoom-in-up" className="addInventory container mx-auto">
      <PageTitle title="Add Inventory" />
      <h2 className="text-center">Add a Product</h2>
      <hr
        className="mb-4 mt-0 d-block mx-auto text-center"
        style={{
          width: "60px",
          backgroundColor: "#00dafc",
          height: "2px",
        }}
      />
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Email"
          value={user?.email}
          readOnly
          type="text"
          {...register("email", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Image"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          type="text"
          {...register("supplierName", { required: true })}
        />
        <input
          className="btn btn-primary grow"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddInventoryItem;
