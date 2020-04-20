import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Activities from "./Components/Activities";
import Schedule from "./Components/Schedule";
import Messages from "./Components/Messages";
import Tutors from "./Components/Tutors";
import SettingsNavbar from "./Components/SettingsNavbar";
import LandingPage from "./Components/LandingPage";
import ActivityInfoPage from "./Components/ActivityInfo/ActivityInfoPage";
import CourseItem2 from "./Components/courses/test"

function App() {
   return (
      <Router>
         <div className="App">
            <div>
               <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/home" component={Home} />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/activities" component={Activities} />
                  <Route path="/messages" component={Messages} />
                  <Route path="/tutors" component={Tutors} />
                  <Route path="/settingsnavbar" component={SettingsNavbar} />
                  <Route path="/activityinfopage"component={ActivityInfoPage} />
               </Switch>
            </div>
         </div>
         {/* Austin's test page for new activities page */}
         <Route path="/1" component={CourseItem2} />
      </Router>
   );
}
export default App;
