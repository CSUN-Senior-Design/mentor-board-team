import React, { Component } from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MessageBox from "./Messages/MessageBox";

export class Messages extends Component {
   render() {
      return (
         <div>
            <Header />
            <p style={{ padding: "0 50px", fontSize: "3rem" }}>Messages</p>
            <MessageBox />
         </div>
      );
   }
}

export default Messages;
