import React, { Component } from "react";
import Consultation from "./Consultation";
import ContactInfo from "./ContactInfo";
import TutorName from "./TutorName";
import About from "./About";
import Media from "./Media";
import Reviews from "./Reviews";
import "./activityinfo.css"
import Grid from '@material-ui/core/Grid';
import Header from "../Header";



export class ActivityInfoPage extends Component {
   render() {
      return (
         <React.Fragment>
            <div>
               <Header></Header>
            </div>
            <div className = "container">
               <Grid container spacing={3} >
                  <Grid item xs={9}>
                     <div>
                        <TutorName/>
                        <About/>
                        <Media/>
                        <Reviews/>
                     </div>
                  </Grid>
                  <Grid item xs={3}>
                     <div className = "fixed">
                        <Consultation />
                        <ContactInfo />
                     </div>
                  </Grid>
               </Grid>
            </div>
         </React.Fragment>
      );
   }
}

export default ActivityInfoPage;
