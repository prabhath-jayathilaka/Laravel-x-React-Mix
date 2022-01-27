import { divide } from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

//

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      
      </Routes>
    );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
