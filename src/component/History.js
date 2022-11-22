import React, { useState, useEffect, forwardRef } from "react";
import { useLocation } from "react-router-dom";
import useCompanyHistorys from "./ApiHistory";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { HistoryChart } from "./HistoryChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function History() {
  const [startDate, setStartDate] = useState("");

  let c = true;
  let location = useLocation();
  let myState = location.state;

  //const allData = useCompanyHistorys4(myState.myState);

  //let min_date, max_date;
  // for start and end date.

  if (myState !== null) {
    c = true;
  } else {
    myState = { myState: "AAPL" };
    c = false;
  }

  const { loading, rowData } = useCompanyHistorys(myState.myState);

  //const {loading, rowData} = useCompanyHistorys(myState.myState);

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  let finalData = filterDate(rowData, startDate);

  const columns = [
    { headerName: "Date", field: "date", width: "150" },
    { headerName: "Open", field: "open", width: "150" },
    { headerName: "High", field: "high", width: "150" },
    { headerName: "Low", field: "low", width: "150" },
    { headerName: "Close", field: "close", width: "150" },
    { headerName: "Volume", field: "volume", width: "150" },
  ];

  const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="datePickerButton fontStyle1" onClick={onClick} ref={ref}>
      {value != "" ? value : "Pick a date..."}
    </button>
  ));

  if (c === true) {
    return (
      <div
        className="container"
        style={{
          height: "300px",
          width: "1000px",
        }}
      >
        <div className="textColor">
          <h1 className="marginToNav">History</h1>
          <p>
            This is a history page of{" "}
            <b className="companySymbol">{myState.myState}</b> stock.
          </p>
        </div>
        <div className="row fontStyle1">
          <div className="col-sm-4">
            <div className="row">
              <div className="col">
                <DatePicker
                  className="datePickerButton"
                  selected={startDate}
                  dateFormat="dd-MM-yyyy"
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date(rowData[99]["date"])}
                  maxDate={new Date(rowData[0]["date"])}
                  placeholderText="Press to Select a date..."
                  customInput={<DateCustomInput />}
                />
              </div>
              <div className="col">
                <button
                  className="resetDateButton"
                  onClick={() => setStartDate("")}
                >
                  Reset Date
                </button>
              </div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
        <div
          className="ag-theme-balham marginHistoryChart"
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
          <div className="container-fluid chartColor">
            <HistoryChart
              //className="chartColor"
              data={finalData}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container-sm textColor"
        style={{
          height: "300px",
          width: "650px",
        }}
      >
        <h1 className="marginToNav">History</h1>
        <p>
          This is a demo history page. This will be a history page for the
          choosing stock. Please go to{" "}
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
          &nbsp;or{" "}
          <NavLink
            to="/quote"
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
            Quote
          </NavLink>
          &nbsp;page to pick a stock!
        </p>
      </div>
    );
  }
}

function filterDate(allData, startDate) {
  let tempData, filterData;
  if (allData != "") {
    if (startDate == "") {
      tempData = allData;
    } else {
      filterData = allData.filter((d) => {
        if (new Date(d.date) >= startDate) {
          return d;
        }
      });
      tempData = filterData;
    }
  } else {
    tempData = [0];
  }

  return tempData;
}
