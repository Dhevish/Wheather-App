import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {" "}
        Developed by{" "}
        <a target="_blank" href="www.linkedin.com/in/dheveesh-p-598a95256">
          Dhevish P
        </a>{" "}
         Leveraging React.js{" "}
        
      </div>
    </React.Fragment>
  );
}

export default App;
