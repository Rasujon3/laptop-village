import React from "react";

const About = () => {
  return (
    // <!-- ======= About Section ======= -->
    <>
      <h2 className="text-center my-5">About</h2>
      <section className="about" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://i.ibb.co/BwzXnZB/about.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-circle"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
    // {/* <!-- End About Section --> */}
  );
};

export default About;
