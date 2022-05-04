import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data, setData];
};

export default useData;
