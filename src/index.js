import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PaymentApp from "./paymentApp.js";

function App() {
  return (
    <div className="App">
      <PaymentApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
