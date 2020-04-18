import React, { Component } from 'react';


import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";

export class Searchbar extends Component {

    constructor(props){
        super()

        this.state = {
            data: props.calendarInitialData,
            searchText: null
        };
    }

    handleChange(event){
        this.setState({
            searchText: event.target.value
        })

        if(this.searchbarRef.value !== ""){

            let filteredItems = this.state.data.filter(item => item.Subject.toLowerCase().indexOf(this.searchbarRef.value.toLowerCase()) !== -1);  

            this.props.setSearchData(filteredItems, this.searchbarRef.value);
        }
        else{
            this.props.setSearchData(this.state.data, this.searchbarRef.value);
        }
    }

    clear(){
        this.setState({
            searchText: ""
        })

        this.searchbarRef.value = "";
    }

    render() {
        return (
            <input 
                className={this.props.cssStyle}
                ref={TextField => this.searchbarRef = TextField} 
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.state.searchText} 
                onChange={(this.handleChange.bind(this))} />
        )
    }
}

export default Searchbar