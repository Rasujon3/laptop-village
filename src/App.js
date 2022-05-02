import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/addinventoryitem"
          element={
            <RequireAuth>
              <AddInventoryItem />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
