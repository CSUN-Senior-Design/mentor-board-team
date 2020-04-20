import React, { Component } from 'react'
import Header from "./Header"

export class Home extends Component {
   render() {
      return (
         <React.Fragment>
            <div>
               <Header />
            </div>
            <div>
               <h1>Home</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default Home;
