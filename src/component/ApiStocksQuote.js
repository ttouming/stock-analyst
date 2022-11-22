import React, { useState, useEffect } from "react";

//const API_KEY = '294915add1ad59e3c3b885d2dce38a80';
const API_KEY = "2c960744d694f362fcf0348d174dc4aa";

async function getCompanys() {
  const url = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NASDAQ&apikey=${API_KEY}`;
  let res = await fetch(url);
  let data = await res.json();

  return data;
}

export default function useCompanys() {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    (async () => {
      setRowData(await getCompanys());
      setLoading(false);
    })();
  }, []);

  return {
    loading,
    rowData,
  };
}
