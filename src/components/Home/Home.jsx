import React from "react";
import Products from "../Products/Products";
import Banner from "../Banner/Banner";
import PageTitle from "../PageTitle/PageTitle";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Facts from "../Facts/Facts";
import MonthWiseSell from "../MonthWiseSell/MonthWiseSell";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Banner />
      <Products />
      <About />
      <Facts />
      <Dashboard />
      <Contact />
    </>
  );
};

export default Home;
