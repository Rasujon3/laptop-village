import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddInventoryItem.css";

const AddInventoryItem = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/product`;
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
    <div className="addInventory container mx-auto">
      <h2 className="text-center">Add a Product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
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
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddInventoryItem;
