import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Activities from './Components/Activities';
import Schedule from './Components/Schedule';
import Messages from './Components/Messages';
import Tutors from './Components/Tutors';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Home}/>
        <Route path="/schedule" component={Schedule}/>
        <Route path="/activities" component={Activities}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/tutors" component={Tutors}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
  }
export default App;
