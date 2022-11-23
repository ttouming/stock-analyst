import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function Stock({ stockquoteData }) {
  const [search, setSearch] = useState("");
  const [sectorData, setSectorData] = useState("");

  if (sectorData == "") {
    setSectorData("(Select All)");
  } // give a default value

  let finalData = filterStock(stockquoteData, search, sectorData);

  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      sortable: true,
      filter: "agTextColumnFilter",
      cellRendererFramework: (params) => {
        return (
          <NavLink to="/history" state={{ myState: params.value }}>
            {params.value}
          </NavLink>
        );
      },
    },
    { headerName: "Name", sortable: true, field: "companyName" },
    {
      headerName: "Secotr",
      field: "sector",
      sortable: true,
      filter: "agSetColumnFilter",
    },
  ];

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
          <h1 className="marginToNav">Stock</h1>
          <p>
            This is a stock page for viewing all avaliable stocks in{" "}
            <b>NASDAQ</b>.
          </p>
        </div>
        <div className="container-sm fluid border fontStyle1">
          <div className="row bg-light stockSearchBar">
            <div className="col bg-light ">
              <p>Search by Symbol:</p>
              <input
                type="text"
                placeholder="Search Symbol.."
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="col bg-light "></div>
            <div className="col bg-light ">
              <p>Filter by Sector:</p>
              <select
                type="text"
                placeholder="(Select All)"
                onChange={(e) => setSectorData(e.target.value)}
              >
                <option>(Select All)</option>
                <option>(Blanks)</option>
                <option>Basic Materials</option>
                <option>Communication Services</option>
                <option>Consumer Cyclical</option>
                <option>Consumer Defensive</option>
                <option>Energy</option>
                <option>Financial Services</option>
                <option>Healthcare</option>
                <option>Industrials</option>
                <option>Real Estate</option>
                <option>Services</option>
                <option>Technology</option>
                <option>Utilities</option>
              </select>
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
          <h1 className="marginToNav">Stock</h1>
          <p>
            This will be a Stock page for the daily stock price in <b>NASDAQ</b>
            . If you are seeing this message, it's because you refreshed the
            Stock page or you jumped into Stock page without entering the app
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

//filter function for symbol search and sector filter
function filterStock(allData, search, sector) {
  let tempData, filterData;

  if (allData !== "") {
    if (search == "") {
      if (sector == "(Select All)") {
        tempData = allData;
      } else if (sector == "(Blanks)") {
        tempData = allData.filter((d) => {
          if (d.sector == "") {
            return d;
          }
        });
      } else {
        tempData = allData.filter((d) => {
          if (d.sector == sector) {
            return d;
          }
        });
      }
    } else {
      filterData = allData.filter((d) => {
        if (d.symbol.toLowerCase().includes(search.toLowerCase())) {
          return d;
        }
      });

      tempData = filterData;

      if (sector == "(Blanks)") {
        tempData = filterData.filter((d) => {
          if (d.sector == "") {
            return d;
          }
        });
      } else if (sector == "(Select All)") {
        tempData = filterData;
      } else {
        tempData = filterData.filter((d) => {
          if (d.sector == sector) {
            return d;
          }
        });
      }
    } // filter def
  } else {
    tempData = [0];
  }

  return tempData;
}
