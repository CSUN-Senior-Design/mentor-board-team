import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Courses from './Courses'


var HashMap = require('hashmap');

class SearchBar extends Component{
    
    constructor(props) {


        super(props);
        this.state = {
                    searchString: '', 
                    data: [],
                    dataMap: new HashMap()

                    //Can create contextValues to store the different data types to serve between pages.

                }
  
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);

        //this.state.dataMap.set("Courses", "")
     }

    //Place holder function for performing a query based on the searchString from user input.
    //Populate with database information when db is constructed.
    getData = () => {
        


    }

    handleChange(e) {
        this.setState({ searchString: e.target.value });
    }
    
    keyPress(e){
        if(e.keyCode === 13){
            this.setState({ searchString: e.target.value });
            console.log('search input:  ', e.target.value);
            this.getData()
        }
    }

    render(){
        return(
            <TextField 
                className="searchBar"
                id="searchInput"
                //label="Search"
                //placeholder="Search by date/time or by activity"
                value={this.state.value}

                InputProps={{
                    disableUnderline: true
                    }}

                onChange={this.handleChange}
                onKeyDown={this.keyPress}
                >

            </TextField>
            
        )
    }
}

export default SearchBar