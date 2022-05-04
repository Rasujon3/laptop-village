import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loading from "./../Loading/Loading";
import useData from "./../../hooks/useData";

const MonthWiseSell = () => {
  const [data] = useData([]);
  return (
    <>
      <h2 className="text-center">Month Wise Sell</h2>
      <hr
        className="mb-4 mt-0 d-block mx-auto text-center"
        style={{
          width: "60px",
          backgroundColor: "#00dafc",
          height: "2px",
        }}
      />
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <ResponsiveContainer width="90%" height={200}>
            <LineChart width={800} height={500} data={data}>
              <Line dataKey={"month"} />
              <Line dataKey={"sell"} />
              <XAxis dataKey="month" />
              <Tooltip />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default MonthWiseSell;
