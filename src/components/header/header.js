import React from "react";
import "./header.css";
import Navbar from "./navbar/navbar"
function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">Logo holder</div>
        <Navbar />
      </div>
    </div>
  );
}

export default header;
