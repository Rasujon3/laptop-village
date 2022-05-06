import React, { useEffect } from "react";
import google from "../../images/social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./SocialLogin.css";
import axios from "axios";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorMessage;

  useEffect(() => {
    const handleJWTtoken = async () => {
      if (user) {
        const email = user?.user?.email;
        const { data } = await axios.post(
          "https://assignmenteleven.herokuapp.com/login",
          {
            email,
          }
        );
        localStorage.setItem("accessToken", data.accessToken);

        navigate(from, { replace: true });
      }
    };
    handleJWTtoken();
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorMessage = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-primary container-width"
        ></div>
        <p className="mt-2 px-2">OR</p>
        <div
          style={{ height: "1px" }}
          className="bg-primary container-width"
        ></div>
      </div>
      <div>
        {errorMessage}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border border-primary d-block mx-auto my-2 container-width grow"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
