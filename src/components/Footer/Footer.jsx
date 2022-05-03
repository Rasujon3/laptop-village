import React from "react";

const Footer = () => {
  return (
    <div class="mt-5">
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <section class="my-5">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto my-5">
                <h6 class="text-uppercase fw-bold">Company name</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto my-5">
                <h6 class="text-uppercase fw-bold">Services</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    Bootstrap Angular
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto my-5">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white text-decoration-none">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-5">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>🏠 New York, NY 10012, US</p>
                <p>💌 info@example.com</p>
                <p>📞 + 01 234 567 88</p>
                <p>☎ + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <a
            class="text-white text-decoration-none"
            href="https://mdbootstrap.com/"
          >
            {" "}
            Ruhul Amin Sujon
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
