import React, { Component } from "react";
import Slideshow from './slideshow'
export class Media extends Component {
   render() {
      return (
        <div className="Box-1">
            <h2>"Pictures and videos"</h2>
            <Slideshow/>
        </div>
      );
   }
}

export default Media;
