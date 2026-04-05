import { useState, useEffect } from "react";

const useData = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchCurrency = async () => {
      const res = await fetch(
        `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`,
      );
      const resData = await res.json();
      setData(resData[currency]);
    };
    fetchCurrency();
  }, [currency]);
  return data;
};

export default useData;
