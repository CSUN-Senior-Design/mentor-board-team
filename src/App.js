import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import "./styles.css";
import SideBar from "./sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />

      <div id="page-wrap">
        <h1>Cool Restaurant 🍔🍕</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
