import React, { Component } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import logo from "./Logos/mindhive2.png";

export class Header extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <div>
                  <Navbar style={{ height: "500pt" }} />
                  <span></span>
               </div>
            </header>
         </div>
      );
   }
}

export default Header;
