import React, { Component } from "react";
import Consultation from "./Consultation";
import ContactInfo from "./ContactInfo";
import TutorName from "./TutorName";
import About from "./About";
import Media from "./Media";
import Reviews from "./Reviews";

export class ActivityInfoPage extends Component {
   render() {
      return (
         <React.Fragment>
         <div>
            <TutorName/>
            <About/>
            <Media/>
            <Reviews/>
         </div>
         <div>
            <Consultation />
            <ContactInfo />
         </div>
         </React.Fragment>
      );
   }
}

export default ActivityInfoPage;
