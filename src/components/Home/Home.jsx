import React from "react";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import PageTitle from "../PageTitle/PageTitle";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Banner />
      <Products />
      <Contact />
    </>
  );
};

export default Home;
