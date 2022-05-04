import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";

const ResetPassword = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  let errorElement;

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      await toast("Sent email, Please check your inbox");
    } else {
      // toast("Please enter your email address");
    }
  };

  if (sending) {
    return <Loading />;
  }

  if (error) {
    errorElement = (
      <p className="text-danger text-center">Error: {error?.message}</p>
    );
  }
  return (
    <div className="container">
      <PageTitle title="Reset Password" />
      <div className="d-flex align-items-center my-2 row">
        <div data-aos="fade-right" className="col-md-6 col-12">
          <img
            className="w-100"
            src="https://i.ibb.co/nMvyTGQ/reset.jpg"
            alt="Reset Password"
          />
        </div>
        <div data-aos="fade-left" className="col-md-6 col-12">
          <div className="">
            <h2 className="text-center mt-2">Forget Password</h2>
            <hr
              className="mb-4 mt-0 d-block mx-auto text-center"
              style={{
                width: "60px",
                backgroundColor: "#00dafc",
                height: "2px",
              }}
            />
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  ref={emailRef}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-50 mx-auto d-block mb-2"
                onClick={handleResetPassword}
              >
                Submit
              </button>
            </form>
            {errorElement}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
