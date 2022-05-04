import React from "react";
import MonthWiseSell from "../MonthWiseSell/MonthWiseSell";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12"></div>
        <div className="col-lg-6 col-md-6 col-sm-12"></div>
      </div>
      <MonthWiseSell />
    </div>
  );
};

export default Dashboard;
