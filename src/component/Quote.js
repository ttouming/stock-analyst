import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import useCompanys from "./ApiStocksQuote";

export default function Quote({ stockquoteData }) {
  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      cellRendererFramework: (params) => {
        return (
          <NavLink to="/history" state={{ myState: params.value }}>
            {params.value}
          </NavLink>
        );
      },
    },
    { headerName: "Price", field: "price", sortable: true },
    { headerName: "Beta", field: "beta" },
  ];

  const [search, setSearch] = useState("");
  let finalData = filterQuote(stockquoteData, search);

  if (stockquoteData !== "") {
    return (
      <div
        className="container"
        style={{
          height: "400px",
          width: "650px",
        }}
      >
        <div className="textColor">
          <h1 className="marginToNav">Quote</h1>
          <p>
            This is a quote page for the daily stock price in <b>NASDAQ</b>.
          </p>
        </div>
        <div className="container-sm fluid border">
          <div className="row bg-light stockSearchBar">
            <div className="col-sm-5 fontStyle1">
              <p>Search by Symbol:</p>
              <input
                type="text"
                placeholder="Search Symbol.."
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className="ag-theme-balham fluid"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <AgGridReact
            columnDefs={columns}
            rowData={finalData}
            pagination={true}
            paginationPageSize={15}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container"
        style={{
          height: "400px",
          width: "650px",
        }}
      >
        <div className="textColor">
          <h1 className="marginToNav">Quote</h1>
          <p>
            This will be a Quote page for the daily stock price in <b>NASDAQ</b>
            . If you are seeing this message, it's because you refreshed the
            Quote page or you jumped into Quote page without entering the app
            from Landing page first. To save the times of API calls, the app
            only call the endpoint once when you enter the app from Landing
            page. To get all needed data for Stock and Quote pages. Please click{" "}
            <NavLink
              to="/"
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
              Landing
            </NavLink>
            or Logo on the top-left to go to Landing page and load the data.
            Thank you!
          </p>
        </div>
      </div>
    );
  }
}

function filterQuote(allData, search) {
  let tempData, filterData;

  if (search == "") {
    tempData = allData;
  } else {
    filterData = allData.filter((d) => {
      if (d.symbol.toLowerCase().includes(search.toLowerCase())) {
        return d;
      }
    });
    tempData = filterData;
  }

  return tempData;
}
