import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
  //Redirect,
} from "react-router-dom";
import Home from "./component/Home";
import Quote from "./component/Quote";
import Stock from "./component/Stocks";
import History from "./component/History";
import Landing from "./component/Landing";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const activeStyle = {
  fontWeight: "bold",
  color: "red",
};

function App() {
  const [stockquoteData, setStockQuoteData] = useState("");

  return (
    <Router>
      <div id="doc3">
        <Navbar bg="success" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                className="imgStyle"
                src={require("./img/logo003.png")}
                alt="StockAnalyst"
                style={{ width: "168px", height: "100px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ textDecoration: "none" }}>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                  <NavLink
                    to="/history"
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
                    History
                  </NavLink>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route
            path="/"
            element={<Landing setStockQuoteData={setStockQuoteData} />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/stock"
            element={<Stock stockquoteData={stockquoteData} />}
          />
          <Route
            path="/quote"
            element={<Quote stockquoteData={stockquoteData} />}
          />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
