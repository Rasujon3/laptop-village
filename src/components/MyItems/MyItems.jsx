import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/myproduct?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        toast(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="container-width container mx-auto">
      <h2 className="text-center">My Items</h2>

      <table className="table table-striped table-hover caption-top table-responsive">
        <caption>List of {user?.email}'s product</caption>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        {myItems.map((myItem) => (
          <tbody key={myItem._id}>
            <tr>
              <th scope="row">
                <img
                  style={{ height: "30px", width: "50px" }}
                  src={myItem.img}
                  alt={myItem.name}
                />
              </th>
              <td>{myItem.name}</td>
              <td>$ {myItem.price}</td>
              <td>{myItem.quantity}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* // </div> */}
    </div>
  );
};

export default MyItems;
