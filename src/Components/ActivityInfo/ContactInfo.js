import React, { Component } from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

export class ContactInfo extends Component {
   render() {
      return (
         <div className="Box-2">
            <h3>Contact Information</h3>
            <FontAwesomeIcon icon={faCompass} />
            <p className="line">www.website.com</p>
            <FontAwesomeIcon icon={faPhone} />
            <p className="line">(555) 555-5555 </p>
            <FontAwesomeIcon icon={faMap} />
            <p>Open In Maps</p>
         </div>
      );
   }
}

export default ContactInfo;
