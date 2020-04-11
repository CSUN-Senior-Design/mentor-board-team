/*
    Will be using the following resources for this component:
        Syncfusion - Main Calendar Package:  https://www.npmjs.com/package/@syncfusion/ej2-react-schedule
            *Note:  Package Install:  npm install @syncfusion/ej2-react-schedule
        
        //Note:  Documentation & examples are included in the description of the video.
        Basic Setup & functionality Guide:  https://www.youtube.com/watch?v=iNkryf_TtZw
        Advanced Event Handling Guide:  https://www.youtube.com/watch?v=lk-P4YV8xaw

        Examples & Documentation:  https://ej2.syncfusion.com/react/demos/#/material/schedule/default

    TODO:  Contact syncfusion for their licensing and use.
    TODO:  Create a ref in constructor to allow parent component to automatically get position.
*/

import React, { Component } from 'react';

import {Inject, ScheduleComponent, ViewsDirective, ViewDirective, Week, Month, Agenda,
        DragAndDrop, Resize, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';
import { ColumnDirective, ColumnsDirective, TreeGridComponent , Filter, Sort } from '@syncfusion/ej2-react-treegrid';

import { extend } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import * as dataSource from '../Datasources/scheduleData.json';

//CSS Style imports for ej2-react-schedule
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";

import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-treegrid/styles/material.css";

const FIELD_STR_MIN_LEN = 5;
const FIELD_STR_MAX_LEN = 100;
const FILTERS_MAX = 5;
const ALERT_SEARCH_RANGE_DEFAULT = 7;

export class Calendar extends Component {

    constructor(){
        super();

        //Holds all of the main activities for the calendar demo.  Activities all start from Feb 10, 2020.
        this.data = extend([], dataSource.activities, null, true);

        this.state = {
            itemDragStartDate: null,
            itemDragEndDate: null,
            filteredData: this.data,
            selectedFilters: FILTERS_MAX,
            searchText: "",
            alertData: [],
            alertsRange: ALERT_SEARCH_RANGE_DEFAULT
        }

        this.minValidation = (args) => {
            return args['value'].length >= FIELD_STR_MIN_LEN;
        }

        this.maxValidation = (args) => {
            return args['value'].length <= FIELD_STR_MAX_LEN;
        }

        //Defines the styling for the different types of activities.  The datasource "ActivityType" id points to the Id field in this object.
        this.resourceData = [
            {ActivityType: 'School', Id: 1, Color: 'red'},
            {ActivityType: 'Tutoring', Id: 2, Color: 'blue'},
            {ActivityType: 'Other Course', Id: 3, Color: 'orange'},
            {ActivityType: 'Meeting', Id: 4, Color: 'purple'},
            {ActivityType: 'Hangout', Id: 5, Color: 'black'}
        ]
    }


    //Gets called whenever the user drags an event sticker along the calendar.  Allows customizing various aspect of dragging operations.
    onDragStart(args) {
        args.interval = 1;  //Indicates the increments of time that events can be shifted when dragged.  Currently set to 1 minute increments on the calendar grid.
        
        this.state.itemDragStartDate = args.data.StartTime;
        this.state.itemDragEndDate = args.data.EndTime;
    }

    //Check if the time slot is currently busy or not.  Also allows for an activity to be rescheduled within its timeslot.
    onDragStop(args){

        let existingNodeStart = this.state.itemDragStartDate.getTime();
        let existingNodeEnd = this.state.itemDragEndDate.getTime();
        let targetNodeStart = args.data.StartTime.getTime();
        let targetNodeEnd = args.data.EndTime.getTime();

        //If the activity is not the same and we try to drag  it into another occupied time slot.
        if (!((targetNodeStart < existingNodeEnd && targetNodeStart > existingNodeStart) || (targetNodeStart < existingNodeStart && targetNodeEnd > existingNodeStart)))
        {
            let startDate = args.data.StartTime;
            let endDate = args.data.EndTime;
            args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate);
        }

        //Reset original start and end times for next drag operation.
        this.state.itemDragStartDate = 0;
        this.state.itemDragEndDate = 0;

        console.log(args.data);
    }



    //Gets called whenever the user resizes an event sticker on the calendar.  Allows customizing various aspect of resizing operations.
    onResizeStart(args){
        args.interval = 1;  //Indicates the increments of time that events can be shifted when resized.  Currently set to 1 minute increments on the calendar grid.
    }

    onActionBegin(args) {
        if ((args.requestType === 'eventCreate') && args.data.length > 0) {
            let eventData = args.data[0];
            let eventField = this.scheduleObj.eventFields;
            let startDate = eventData[eventField.startTime];
            let endDate = eventData[eventField.endTime];
            args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate);
            console.log(args.cancel);
        }
    }

    //Filters and refreshes the activity data displayed on the calendar.
    filterActivities(args){

        //Reset the searchbar value so the filter and search bar dont overlap.
        this.searchbarRef.value = "";
        console.log(this.searchbarRef.value);

        let filterType = args.target.element.attributes.value.value;
        let filteredItems = [];

        if (filterType === "School")
            filteredItems = this.data.filter(item => item.ActivityType === 1);

        else if (filterType === "Tutoring")
            filteredItems = this.data.filter(item => item.ActivityType === 2);

        else if (filterType === "Other Course")
            filteredItems = this.data.filter(item => item.ActivityType === 3);

        else if (filterType === "Hangout")
            filteredItems = this.data.filter(item => item.ActivityType === 4);

        else if (filterType === "Meeting")
            filteredItems = this.data.filter(item => item.ActivityType === 5);

        let finalAry = [];

        if (!args.target.element.checked){
            finalAry = this.state.filteredData.filter(function(element) {
                return filteredItems.indexOf(element) === -1;
            });
        }
        else finalAry = this.state.filteredData.concat(filteredItems);
        
        
        //Set the filteredData array to the finalized filtered array, then set the eventSettings to that array.
        this.setState({ 
            filteredData: finalAry,
            searchText: ""
         });
        this.scheduleObj.eventSettings.dataSource = this.state.filteredData;

    }

    //Updates the search text for the search bar on each update of a keystroke
    searchHandleChange(event){
        
        //Reset filters to include everything for the search.
        this.schoolFilterRef.checked = true;
        this.tutorFilterRef.checked = true;
        this.otherFilterRef.checked = true;
        this.meetingFilterRef.checked = true;
        this.hangoutFilterRef.checked = true;
        
        this.setState({
            filteredData: this.data,
            searchText: event.target.value
        })

        this.scheduleObj.eventSettings.dataSource = this.state.filteredData;
    }

    //Searches the calendar for an activity based on its name.
    searchActivities(event){

        //When the user presses the enter key to submit their input in the text field.
        if (event.key === "Enter"){

            if(this.searchbarRef.value !== "" && this.searchbarRef.value !== null){
                let filteredItems = this.data.filter(item => item.Subject.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);  
                this.scheduleObj.eventSettings.dataSource = filteredItems;

                //Disable all filters so only the search item appears.  Also prevents a bug which inverts filter states.
                this.schoolFilterRef.checked = false;
                this.tutorFilterRef.checked = false;
                this.otherFilterRef.checked = false;
                this.meetingFilterRef.checked = false;
                this.hangoutFilterRef.checked = false;
            }
        }
    }

    initAlerts(){
        let currentDate = new Date();
        let searchEndDate = new Date(currentDate.getTime() + (this.state.alertsRange * 86400000));
        let filteredItems = this.scheduleObj.getOccurrencesByRange(currentDate, searchEndDate);

        this.setState({
            alertData: filteredItems
        })
    }

    getAlerts(args){
        let searchRange = args.value;
        let currentDate = new Date();
        let searchEndDate = new Date(currentDate.getTime() + (searchRange * 86400000));
        let filteredItems = this.scheduleObj.getOccurrencesByRange(currentDate, searchEndDate);

        this.setState({
            alertsRange: searchRange,
            alertData: filteredItems
        })
    }

    render(){
        return(
            
            <React.Fragment>

                <div className = "schedulepage-calendar">

                    <ScheduleComponent height="97.5%"
                        ref={schedule => this.scheduleObj = schedule}
                        selectedDate= {new Date(2020, 4, 10)}
                        eventSettings={{ dataSource: this.data,
                            fields: {
                                id: 'Id',
                                subject: { name: 'Subject', title: 'Activity Name', 
                                    validation: { 
                                        required: true, 
                                        minLength: [this.minValidation, 'Must input atleast ' + FIELD_STR_MIN_LEN +' characters'],
                                        regex: ['^[a-zA-Z0-9- ]*$', 'Special character(s) not allowed in this field']
                                    } 
                                },

                                description: {
                                    name: 'Description', validation: {
                                        maxLength: [this.maxValidation, 'Cant input more than '+ FIELD_STR_MAX_LEN + ' characters'],
                                        regex: ['^[a-zA-Z0-9- ]*$', 'Special character(s) not allowed in this field']
                                    }
                                },

                                isAllDay: { name: 'IsAllDay' },
                                startTime: { name: 'StartTime', validation: { required: true, date: true } },
                                endTime: { name: 'EndTime', validation: {  date: true }}
                            }}}
                        
                        dragStart={(this.onDragStart.bind(this))}
                        dragStop={(this.onDragStop.bind(this))}
                        resizeStart={(this.onResizeStart.bind(this))}
                        actionBegin={this.onActionBegin.bind(this)}
                    >
                    <Inject services = {[ Week, Month, Agenda, DragAndDrop, Resize ]}/>

                    <ResourcesDirective>
                        <ResourceDirective
                            field='ActivityType'
                            title='Activity Type'
                            name='Activities'
                            allowMultiple={true}
                            dataSource={this.resourceData}
                            textField='ActivityType'
                            idField='Id'
                            colorField='Color'
                        >
                        </ResourceDirective>
                    </ResourcesDirective>

                    <ViewsDirective>
                        <ViewDirective option='Week' startHour='07:00' endHour='24:00'/>
                        <ViewDirective option='Month' showWeekNumber={true}/>
                        <ViewDirective option='Agenda'/>
                    </ViewsDirective>

                    </ScheduleComponent>
                </div>
                
                <div className = "schedulepage-extras">

                    <div className= "searchbar-body">

                        <div className = "searchbar-header"> Search Activites </div>
                        <input className="searchbar" ref={TextField => this.searchbarRef = TextField} name="search-bar" type="text" placeholder="Enter Activity Name" value={this.state.searchText} onKeyPress={(this.searchActivities.bind(this))} onChange={(this.searchHandleChange.bind(this))} />
                        
                    </div>

                    <div className = "schedulepage-filters"> 
                            
                        <div className="filters-header"> Filters </div>

                        <ul className = "filter-ul-style">
                            <li className="filter-style"> <CheckBoxComponent ref={CheckBox => this.schoolFilterRef = CheckBox} cssClass="school" name="Filter" value="School" label="School" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                            <li className="filter-style"> <CheckBoxComponent ref={CheckBox => this.tutorFilterRef = CheckBox} cssClass="tutoring" name="Filter" value="Tutoring" label="Tutoring" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                            <li className="filter-style"> <CheckBoxComponent ref={CheckBox => this.otherFilterRef = CheckBox} cssClass="other-course" name="Filter" value="Other Course" label="Other Course" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                            <li className="filter-style"> <CheckBoxComponent ref={CheckBox => this.meetingFilterRef = CheckBox} cssClass="meeting" name="Filter" value="Meeting" label="Meeting" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                            <li className="filter-style"> <CheckBoxComponent ref={CheckBox => this.hangoutFilterRef = CheckBox} cssClass="hangout" name="Filter" value="Hangout" label="Hangout" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                        </ul>
                    </div> 

                    <div className = "alerts-body">
                        <div className = "alerts-header"> Alerts </div>

                        <div>
                            <TreeGridComponent dataSource={this.state.alertData} height = "325px">
                                <ColumnsDirective>
                                <ColumnDirective field='Subject' headerText='Name' width='150' textAlign='Left'/>
                                <ColumnDirective field='StartTime' headerText='Date' width='130' format='yMd' textAlign='Left' type='date'/>
                                <ColumnDirective field='Location' headerText='Location' width='200' textAlign='Left'/>
                                </ColumnsDirective>
                                <Inject services={[Sort, Filter]}/>
                            </TreeGridComponent>

                        </div>

                        <div className = "alerts-options">
                            
                            <div style={{paddingRight: "10px", width: "150px", height: "25px", paddingTop: "5px"}}> Days to search:   </div> 
                            <NumericTextBoxComponent value={this.state.alertsRange} style={{width: "75px", height: "35px", padding: "0px"}} decimals = {0} validateDecimalOnType={true} onChange={(this.getAlerts.bind(this))} created={(this.initAlerts.bind(this))}/>

                        </div>

                    </div>

                </div>

            </React.Fragment>

                
            

        );
    }

}

export default Calendar