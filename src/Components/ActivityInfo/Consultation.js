import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
export class Consultation extends Component {
   render() {
      return (
         <div className="Box-1">
            <div className="Span-text">
               Schedule an Appointment with "INSTRUCTOR_NAME"!
            </div>

            <Button variant="contained">
               <div>
                  Set Up Appointment!{" "}
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
               </div>
            </Button>
            <div className="Text-note">
               <i>0 appointments set up within the past month.</i>
            </div>
         </div>
      );
   }
}

export default Consultation;
