import React from "react";

const About = () => {
  return (
    // <!-- ======= About Section ======= -->
    <>
      <h2 className="text-center mt-5">About</h2>
      <hr
        className="mb-4 mt-0 d-block mx-auto text-center"
        style={{
          width: "60px",
          backgroundColor: "#00dafc",
          height: "2px",
        }}
      />
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
              <h3>Laptop Village</h3>
              <p className="fst-italic">
                Laptop Village is one of the largest computer stores in
                Bangladesh. We are offering bundle deals and discounted prices
                for the latest computer accessories, laptops, notebooks,
                monitors, desktop PC, office equipment, digital camera,
                printers, gaming peripherals, networking products, all security
                solutions, and software-antivirus.
              </p>
              <ol>
                <li>Thousands of different computer stores.</li>
                <li>Provide various features and price</li>
                <li>
                  For purchasing 100% branded and quality guaranteed products
                  Laptop Village is one of the best options.
                </li>
              </ol>
              <p>
                For buying a computer or laptop across the country Laptop
                Village has seven different outlets. Laptop Village authority is
                inviting all our respected customers to shop with confidence at
                all our tangible outlets.So keep yourself advanced of the latest
                technology, you can visit the village-bd blog to stay updated
                with tradable and new arrivals on different stores on our
                website.So when you are looking for a laptop shop, whether it’s
                online or pickup you can find everything you desired under one
                roof at Laptop Village to buy retail products at wholesale
                discount prices. Our mission is to build your complete
                satisfaction.
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
