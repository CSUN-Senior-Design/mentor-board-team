import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import SearchBar from './SearchBar'

const search = {
    marginTop: "0%",
    color: "red"
}

export class Schedule extends Component {
    render() {
        return (
            

            <div style = {search} >
                <SearchBar/>  
            </div>
            
        );
    }
}

export default Schedule
