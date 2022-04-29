import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-0">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="display-2 fw-bold text-blue">Error 404</h1>
            <p className="fs-5">
              Oops! The page you're looking for isn't here.
            </p>
            <p className="fs-5">
              You might have the wrong address, or the page may have moved.
            </p>
          </div>
        </div>
        <div className="col-md-6 order-1">
          <div className="d-flex justify-content-center align-items-center py-3">
            <img
              className="img-fluid grow"
              src="https://i.ibb.co/R0N7mvF/notFound.jpg"
              alt="404-Not Found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
