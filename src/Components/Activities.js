import React, { Component } from "react";
import Courses from "./courses/Courses";
import Navbar from "./Navbar";
import Header from "./Header";
import Button from '@material-ui/core/Button';


export class Activities extends Component {
   render() {
      return (
         <React.Fragment>
            <div>
               <Header></Header>
            </div>
            <div className="App-body">
               <Courses />
                {/* temporary link to info */}
               <Button variant="contained" color="primary" href="activityinfopage"> Info </Button>
            </div>
         </React.Fragment>
      );
   }
}

export default Activities;
