import React, { Component } from 'react'
import Courses from './courses/Courses'
import Navbar from './Navbar'

export class Profile extends Component {
    render() {
        return (
            <div >
               <div className= "App-body">
               <Courses />
               </div>
            </div>
        )
    }
}

export default Profile
