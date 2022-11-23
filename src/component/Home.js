import React from "react";
import {} from "react-bootstrap";

export default function Home() {
  return (
    <div
      className="container-sm textColor"
      style={{
        height: "300px",
        width: "650px",
      }}
    >
      <h1 className="marginToNav">Home</h1>
      <div className="row">
        <p>
          Welcom to <b>StockAnalyst</b>. We provide thousands of lastest stocks
          information of <b>NASDAQ</b>. In this simple applicaiton, you can view
          and analyze any selected stock by choosing from stock symbol.{" "}
        </p>
        <img
          className="imgStyle"
          src={require("./img/home002.png")}
          alt="404"
          style={{ width: "60%", height: "60%" }}
        />
      </div>
      <div className="row wordPadding">
        <p>Also, we implement some useful filter to make your life easier. </p>
      </div>
      <div className="row">
        <img
          className="imgStyle wordPadding"
          src={require("./img/home003.png")}
          alt="404"
          style={{ width: "60%", height: "60%" }}
        />
        <p>
          All the up to date information is provided and updated by{" "}
          <b>FMP API</b>. To learn more about FMP API, please click the Link
          below to go to FMP API document site.
        </p>
      </div>
      <div className="linkPadding">
        <a
          href="https://site.financialmodelingprep.com/developer/docs"
          target="_blank"
        >
          FMP API Document
        </a>
      </div>
    </div>
  );
}
