import React, { Component } from 'react'
import Courses from './courses/Courses'
import Navbar from './Navbar'
import Header from "./Header"


export class Activities extends Component {
    render() {
        return (
            <React.Fragment>
                <div> 
                   <Header></Header>
                </div>
         
            <div className= "App-body">
               <Courses />
            </div>
            </React.Fragment>
            
        )
    }
}

export default Activities
