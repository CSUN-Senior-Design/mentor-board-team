import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import TextField from '@material-ui/core/TextField'

export class Schedule extends Component {
    
    //Used for pulling up search data from the users activities information.
    state = {
        activities: [],
        searchString: ''
    }
    
    
    //Place holder function for performing a query based on the searchString from user input.
    //Populate with database information when db is constructed.
    getActivity = () => {
        
    }


    onSearchInputChange = (event) => {
        if (event.target.value){
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getActivity()
    }

    

    render() {

        const style = {
            backgroundColor: '#ffffff', 
            color: '#00000',
            position: 'fixed',
            top: '10%',
            width: '256px',
            height: '50px',
            border: '2px solid yellow',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
         }

        return (

            <div>
                {this.state.activities ? (
                    
                        <TextField style={style}
                                    id="searchInput"
                                    label="Schedule Search"
                                    placeholder="Search by date/time or by activity"
                                    value={this.state.name}
                                    margin="normal"

                                    InputProps={{
                                        disableUnderline: true
                                        }}
                                    onChange={this.onSearchInputChange}>
                         
                         </TextField>
                    

                ) : "No activities found" }
              
            </div>

        );
    }
}

export default Schedule
