import React, { Component } from 'react';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";

import '../Css/schedule.css';

export class FilterPanel extends Component {

    constructor(props){
        super()

        this.state = {
            data: props.data
        };
    }

    onChange(){
        let filteredItems = this.state.data.filter(activity => 
            (activity.ActivityType === 1 && this.schoolFilterRef.checked) || 
            (activity.ActivityType === 2 && this.tutoringFilterRef.checked) ||
            (activity.ActivityType === 3 && this.otherFilterRef.checked) ||
            (activity.ActivityType === 4 && this.hangoutFilterRef.checked) ||
            (activity.ActivityType === 5 && this.meetingFilterRef.checked) ||
            (activity.ActivityType === 6 && this.blocksFilterRef.checked)
            )

        this.props.setFilteredData(filteredItems);
    }

    disableFilters(){
        this.schoolFilterRef.checked = false;
        this.tutoringFilterRef.checked = false;
        this.otherFilterRef.checked = false;
        this.meetingFilterRef.checked = false;
        this.hangoutFilterRef.checked = false;
        this.blocksFilterRef.checked = false;

        this.schoolFilterRef.disabled = true;
        this.tutoringFilterRef.disabled = true;
        this.otherFilterRef.disabled = true;
        this.meetingFilterRef.disabled = true;
        this.hangoutFilterRef.disabled = true;
        this.blocksFilterRef.checked = true;
    }

    enableFilters(){
        this.schoolFilterRef.checked = true;
        this.tutoringFilterRef.checked = true;
        this.otherFilterRef.checked = true;
        this.meetingFilterRef.checked = true;
        this.hangoutFilterRef.checked = true;
        this.blocksFilterRef.checked = true;

        this.schoolFilterRef.disabled = false;
        this.tutoringFilterRef.disabled = false;
        this.otherFilterRef.disabled = false;
        this.meetingFilterRef.disabled = false;
        this.hangoutFilterRef.disabled = false;
        this.blocksFilterRef.checked = false;
    }

    //checks if all filters are activated.  Returns true if all filters are currently checked (default state)
    isFiltering(){
        return ( this.schoolFilterRef.checked && this.tutoringFilterRef.checked && this.otherFilterRef.checked && this.meetingFilterRef.checked && this.hangoutFilterRef.checked )
    }

    render() {
        return (

            <ul className = "filter-ul-style">

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.schoolFilterRef = CheckBox} 
                        cssClass = "school" 
                        name = "Filter" 
                        value = "School" 
                        label = "School" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.tutoringFilterRef = CheckBox} 
                        cssClass = "tutoring" 
                        name = "Filter" 
                        value = "Tutoring" 
                        label = "Tutoring" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.otherFilterRef = CheckBox} 
                        cssClass = "other-course" 
                        name = "Filter" 
                        value = "Other Course" 
                        label = "Other Course" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.meetingFilterRef = CheckBox} 
                        cssClass = "meeting" 
                        name = "Filter" 
                        value = "Meeting" 
                        label = "Meeting" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.hangoutFilterRef = CheckBox} 
                        cssClass = "hangout" 
                        name = "Filter" 
                        value = "Hangout" 
                        label = "Hangout" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>

                <li className="filter-style"> 
                    <CheckBoxComponent 
                        ref = {CheckBox => this.blocksFilterRef = CheckBox} 
                        cssClass = "block" 
                        name = "Filter" 
                        value = "Block" 
                        label = "Block" 
                        checked = {true} 
                        onChange = {(this.onChange.bind(this))}
                        /> 
                </li>
                
            </ul>

        )
    }
}

export default FilterPanel