import React from "react";
import "./Facts.css";
import CountUp from "react-countup";
import useProducts from "../../hooks/useProducts";

const Facts = () => {
  const [products] = useProducts();
  return (
    <>
      {/* //  ======= Facts Section =======  */}
      <section className="facts section-bg my-5 py-5" data-aos="fade-up">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              >
                <CountUp delay={1} end={241} />
              </span>
              <p>Clients</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              >
                <CountUp delay={2} end={`${products.length}`} />
              </span>
              <p>Products</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1463"
                data-purecounter-duration="1"
                className="purecounter"
              >
                <CountUp delay={3} end={24} />
              </span>
              <p>Hours Of Support</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              >
                <CountUp delay={4} end={15} />
              </span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </section>
      {/* //  End Facts Section  */}
    </>
  );
};

export default Facts;
