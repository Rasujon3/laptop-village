import React, { useEffect } from "react";
import google from "../../images/social/google.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./SocialLogin.css";
import axios from "axios";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithGithub, githubUser, githubLoading, githubError] =
  //   useSignInWithGithub(auth);
  // const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
  //   useSignInWithFacebook(auth);
  // const [signInWithTwitter, twitterUser, twitterLoading, twitterError] =
  //   useSignInWithTwitter(auth);
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  useEffect(() => {
    // if (user || githubUser || facebookUser || twitterUser) {
    const handleJWTtoken = async () => {
      if (user) {
        const email = user?.user?.email;
        console.log(email);
        const { data } = await axios.post("http://localhost:5000/login", {
          email,
        });
        localStorage.setItem("accessToken", data.accessToken);
        // event.target.reset();
        // navigate(from, { replace: true });
        navigate(from, { replace: true });
      }
    };
    handleJWTtoken();
    // }, [user, githubUser, facebookUser, twitterUser]);
  }, [user]);

  // if (loading || githubLoading || facebookLoading || twitterLoading) {
  if (loading) {
    return <Loading />;
  }
  // if (error || githubError || facebookError || twitterError) {
  if (error) {
    errorElement = (
      <p className="text-danger text-center">
        {/* Error: {error?.message} {githubError?.message} */}
        Error: {error?.message}
      </p>
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
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border border-primary d-block mx-auto my-2 container-width grow"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        {/* <button
          onClick={() => signInWithFacebook()}
          className="btn border border-primary container-width d-block mx-auto my-2 grow"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebok Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn border border-primary container-width d-block mx-auto my-2 grow"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
        <button
          onClick={() => signInWithTwitter()}
          className="btn border border-primary container-width d-block mx-auto grow"
        >
          <img style={{ width: "30px" }} src={twitter} alt="" />
          <span className="px-2">Twitter Sign In</span>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
