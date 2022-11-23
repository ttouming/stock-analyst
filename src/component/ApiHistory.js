import React, { useState, useEffect } from "react";

const API_KEY = "";// change to your FMP api key here

async function getCompanyHistorys(quoteCompany) {
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${quoteCompany}?timeseries=100&apikey=${API_KEY}`;
  let res = await fetch(url);
  let data = await res.json();
  data = data.historical;

  return data.map((d) => {
    return {
      date: d.date,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
      volume: d.volume,
    };
  });
}

export default function useCompanyHistorys(quoteCompany) {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    (async () => {
      setRowData(await getCompanyHistorys(quoteCompany));
      setLoading(false);
    })();
  }, []);

  return {
    loading,
    rowData,
  };
}
