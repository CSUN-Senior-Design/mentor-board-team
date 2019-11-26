import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Activities from "./Components/Activities";
import Schedule from "./Components/Schedule";
//import Messages from './Messages';
//import Schedule from './Schedule';
//import Tutors from './Tutors';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar></Sidebar>
        <div>
          <header className="App-header">
            <h1> MentorBoard</h1>
            <Schedule></Schedule>
            <Switch>
              <Route exact path="/home" component={Navbar} />
            </Switch>
          </header>
          <div className="App-body">
            <Switch>
              <Route path="/activities" component={Activities} />
            </Switch>
          </div>
          <div>
            <Switch>
              <Route path="/schedule" component={Schedule} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
