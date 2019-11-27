import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Activities from './Components/Activities';
import Messages from './Components/Messages';
import Schedule from './Components/Schedule';
import Tutors from './Components/Tutors';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Switch>
          <Route path="/" component={Navbar}/>
        </Switch>  
        </header> 
        
        <div className= "App-body">
          <Switch>
            <Route path="/schedule" component={Schedule}/>
            <Route exact path="/activities" component={Activities}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/tutors" component={Tutors}/>
            <Route exact path="/messages" component={Messages}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
