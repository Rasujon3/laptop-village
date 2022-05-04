import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://assignmenteleven.herokuapp.com/sells`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data, setData];
};

export default useData;
