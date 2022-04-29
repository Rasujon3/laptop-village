import React from "react";

const Blogs = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mt-2"
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1. Difference between javascript and nodejs?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Authentication is the process of verifying who someone is, on the
              other hand Authorization is the process of verifying what specific
              applications, files, and data a user has access to. For example,
              the process of verifying and confirming employees ID and passwords
              in an organization is called Authentication, but determining which
              employee has access to which floor is called Authorization.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2. When should you use nodejs and when should you use mongodb?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Firebase can be seen as a server-less backend for your mobile
              apps, web apps, etc. It is a service provided by Google.Firebase
              can be used when you do not want to spend a lot of time developing
              your own backend. It can be used for rapid development. I have
              been using it in my website in production. You will not have to
              take care of servers, etc, Google will take care of it for you.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through
              Token-based authentication, Eye scanners, Speaker Recognition,
              Fingerprint scanners, Facial recognition, Cards, Retina scans,
              Voice recognition, Fingerprints etc.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q3. Differences between sql and nosql databases?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Firebase can be seen as a server-less backend for your mobile
              apps, web apps, etc. It is a service provided by Google.Firebase
              can be used when you do not want to spend a lot of time developing
              your own backend. It can be used for rapid development. I have
              been using it in my website in production. You will not have to
              take care of servers, etc, Google will take care of it for you.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through
              Token-based authentication, Eye scanners, Speaker Recognition,
              Fingerprint scanners, Facial recognition, Cards, Retina scans,
              Voice recognition, Fingerprints etc.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q4. What is the purpose of jwt and how does it work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Firebase can be seen as a server-less backend for your mobile
              apps, web apps, etc. It is a service provided by Google.Firebase
              can be used when you do not want to spend a lot of time developing
              your own backend. It can be used for rapid development. I have
              been using it in my website in production. You will not have to
              take care of servers, etc, Google will take care of it for you.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through
              Token-based authentication, Eye scanners, Speaker Recognition,
              Fingerprint scanners, Facial recognition, Cards, Retina scans,
              Voice recognition, Fingerprints etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
