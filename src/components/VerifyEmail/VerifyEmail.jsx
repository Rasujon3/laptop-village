import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const VerifyEmail = () => {
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  if (sending) {
    return <Loading />;
  }
  return (
    <div className="text-center mt-5">
      <h3 className="text-danger">Your Email is not verified!!</h3>
      <h5 className="text-success">Please Verify your email address</h5>
      <button
        className="btn btn-primary grow"
        onClick={async () => {
          await sendEmailVerification();
          toast("Email Sent Successfully");
        }}
      >
        Send Verification email Again
      </button>
    </div>
  );
};

export default VerifyEmail;
