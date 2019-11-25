import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
//import Activities from './Activities';
//import Messages from './Messages';
import Schedule from './Components/Schedule';
//import Tutors from './Tutors';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path="/" component={Navbar}/>
      </Switch>   

      <Switch>
          <Route exact path="/schedule" component={Schedule}/>
        </Switch>
      </header>
    </div>

    </Router>
  );
}

export default App;
