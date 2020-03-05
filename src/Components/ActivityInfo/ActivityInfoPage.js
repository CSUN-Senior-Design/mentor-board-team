import React, { Component } from "react";
import Consultation from "./Consultation";
import ContactInfo from "./ContactInfo";

export class ActivityInfoPage extends Component {
   render() {
      return (
         <div>
            <Consultation />
            <ContactInfo />
         </div>
      );
   }
}

export default ActivityInfoPage;
