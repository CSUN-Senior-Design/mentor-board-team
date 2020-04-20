import React, { Component } from "react";
import Header from "./Header";
import CoursesItem from "./courses/CourseItem"
import "./courses/Activity.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export class Activities extends Component {
   render() {
      return (
         <React.Fragment>
            <div>
               <Header></Header>
            </div>
            <Grid container spacing={3}>
               <Grid item xs={9}>
                  <div className="App-body">
                     <CoursesItem />
                  </div>
               </Grid>
               <Grid item xs={2}>
                  <div className= "Ad-container">
                     <div className= "Ad"> 
                        <h1>Ad Space</h1>
                     </div>
                  </div>
               </Grid>
               <Grid item xs={1}>
               </Grid>
            </Grid>
         </React.Fragment>
      );
   }
}

export default Activities;
