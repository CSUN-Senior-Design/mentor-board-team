import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import SearchBar from './SearchBar'

export class Schedule extends Component {
    render() {
        return (
            <div className="searchBar">
                <SearchBar
                    id={"Schedule Search Bar"}
                    label="Schedule Search"
                    placeHolder="search activities"
                    locked={false}
                    active={false}
                />  
            </div>
        );
    }
}

export default Schedule
