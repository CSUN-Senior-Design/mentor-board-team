import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";



export class TutorName extends Component {
   render() {
      return (
        <div className="Box-1">
            <h1 margin = "0">"TUTOR_NAME"</h1>
            <Rating
                           name="rating"
                           value={4.5}
                           precision={0.1}
                           readOnly
                        />
        </div>
      );
   }
}

export default TutorName;
