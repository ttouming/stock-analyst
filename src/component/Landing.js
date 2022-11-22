import React, { useState } from "react";
import {} from "react-bootstrap";
import useCompanys from "./ApiStocksQuote";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function Landing({ setStockQuoteData }) {
  const [youtubeID] = useState("k5g2e7wN_lk");
  const { loading, rowData } = useCompanys();

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  setStockQuoteData(rowData);

  return (
    <div
      className="container-sm fluid textColor"
      style={{
        height: "300px",
        width: "650px",
      }}
    >
      <h1 className="marginToNav">Welcome to StockAnalyst!</h1>
      <div className="row bigPadding">
        <div className="col">
          <iframe
            width="427"
            height="240"
            className="video videoBorder"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${youtubeID}?autoplay=1&mute=1&playlist=${youtubeID}&loop=1`}
          ></iframe>
          <div className="linkPadding">
            <a
              href="https://site.financialmodelingprep.com/developer/docs"
              target="_blank"
            >
              All data is from FMP API.
            </a>
          </div>
        </div>
        <div className="col">
          <p>
            We provide stocks for you to view, search, filter and analyze. Go to{" "}
            <NavLink
              to="/home"
              className="navbarpadding"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#00f7ff",
                    }
                  : { color: "#fff", background: "#198754" }
              }
            >
              Home
            </NavLink>
            page to have a quick look for our app or go to{" "}
            <NavLink
              to="/stock"
              className="navbarpadding"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#fff",
                      background: "#00f7ff",
                    }
                  : { color: "#fff", background: "#198754" }
              }
            >
              Stock
            </NavLink>
            page to pick a stock and start your own analysis!
          </p>
        </div>
      </div>
    </div>
  );
}
