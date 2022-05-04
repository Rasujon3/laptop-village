import axios from "axios";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
import { toast } from "react-toastify";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorMessage;

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    errorMessage = (
      <p className="text-danger text-center">
        {/* Error: {error?.message} {githubError?.message} */}
        Error: {error?.message}
      </p>
    );
    toast(error?.message);
    return;
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ name });
      const { data } = await axios.post(
        "https://assignmenteleven.herokuapp.com/login",
        {
          email,
        }
      );
      localStorage.setItem("accessToken", data.accessToken);
      event.target.reset();
      // navigate(from, { replace: true });
      navigate(from, { replace: true });
    }
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container"
    >
      <div className="d-flex align-items-center my-2 row">
        <div className="col-md-6 col-12">
          <img
            className="w-100"
            src="https://i.ibb.co/tLmMJXd/register.png"
            alt="Register"
          />
        </div>
        <div className="col-md-6 col-12">
          <div className="register-form">
            <PageTitle title="Register" />
            <h2 style={{ textAlign: "center" }}>Register Now</h2>
            <hr
              className="mb-4 mt-0 d-block mx-auto text-center"
              style={{
                width: "60px",
                backgroundColor: "#00dafc",
                height: "2px",
              }}
            />
            <form onSubmit={handleRegister}>
              <input type="text" name="name" placeholder="Your Name" />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input
                onClick={() => setAgree(!agree)}
                type="checkbox"
                name="terms"
                id="terms"
              />

              <label
                className={`ps-2 grow ${agree ? "" : "text-danger"}`}
                htmlFor="terms"
              >
                Accept Laptop Village Terms & Conditions
              </label>
              <input
                disabled={!agree}
                className="w-50 mx-auto btn btn-primary mt-2 grow"
                type="submit"
                value="Register"
              />
            </form>
            {errorMessage}
            <p>
              <Link
                className="text-primary pe-auto text-decoration-none"
                to="/login"
              >
                Already have an account?{" "}
              </Link>{" "}
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
