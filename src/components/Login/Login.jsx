import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "./../PageTitle/PageTitle";
import Loading from "./../Loading/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;

  let from = location.state?.from?.pathname || "/home";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    // navigate(from, { replace: true });
    toast("Login Successfully");
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
    toast(error?.message);
    return;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://assignmenteleven.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    event.target.reset();
    navigate(from, { replace: true });
  };
  return (
    <div className="container">
      <div className="d-flex align-items-center my-2 row">
        <div data-aos="fade-right" className="col-md-6 col-12">
          <img
            className="w-100"
            src="https://i.ibb.co/DMj3XVd/login.jpg"
            alt="Login"
          />
        </div>
        <div data-aos="fade-left" className="col-md-6 col-12 ">
          <div className="">
            <PageTitle title="Login" />
            <h2 className="text-center mt-2">Login</h2>
            <hr
              className="mb-4 mt-0 d-block mx-auto text-center"
              style={{
                width: "60px",
                backgroundColor: "#00dafc",
                height: "2px",
              }}
            />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-50 mx-auto d-block mb-2 grow"
              >
                Login
              </button>
            </form>
            <span className="text-center">{errorElement}</span>
            <p>
              <Link
                className="text-primary pe-auto text-decoration-none grow"
                to="/register"
              >
                New to Laptop Village?{" "}
              </Link>{" "}
            </p>
            <p>
              <Link
                className="text-primary pe-auto text-decoration-none grow"
                to="/resetpassword"
              >
                Forget Password?{" "}
              </Link>{" "}
            </p>

            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
