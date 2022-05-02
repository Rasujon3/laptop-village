import React from "react";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import PageTitle from "../PageTitle/PageTitle";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Facts from "../Facts/Facts";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Banner />
      <Products />
      <About />
      <Facts />
      <Contact />
    </>
  );
};

export default Home;
