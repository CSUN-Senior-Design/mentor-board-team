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

import { extend } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

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

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import { AvLibraryMusic } from 'material-ui/svg-icons';

const FIELD_STR_MIN_LEN = 5;
const FIELD_STR_MAX_LEN = 100;
const FILTERS_MAX = 5;

export class Calendar extends Component {

    
    
    constructor(){
        super();

        //Holds all of the main activities for the calendar demo.  Activities all start from Feb 10, 2020.
        this.data = extend([], dataSource.activities, null, true);

        this.state = {
            itemDragStartDate: null,
            itemDragEndDate: null,
            filteredData: this.data,
            selectedFilters: FILTERS_MAX
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
        
        //console.log(this.state.itemDragStartDate)
    }

    //Check if the time slot is currently busy or not.  Also allows for an activity to be rescheduled within its timeslot.
    onDragStop(args){

        let existingNodeStart = this.state.itemDragStartDate.getTime();
        let existingNodeEnd = this.state.itemDragEndDate.getTime();
        let targetNodeStart = args.data.StartTime.getTime();
        let targetNodeEnd = args.data.EndTime.getTime();

        console.log(args.data);

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

    
    filterSchool(){


    }



    //Filters and refreshes the activity data displayed on the calendar.
    filterActivities(args){

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
        this.setState({ filteredData: finalAry });
        this.scheduleObj.eventSettings.dataSource = this.state.filteredData;

    }

    render(){
        return(
            
            <React.Fragment>

                <div className = "schedulepage-calendar">

                    <ScheduleComponent height="97.5%"
                        ref={schedule => this.scheduleObj = schedule}
                        selectedDate= {new Date(2020, 1, 10)}
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

                <div className = "schedulepage-filters"> 
                        
                    <h3 className="filters-header"> Filter By.. </h3>

                    <ul className = "filter-ul-style">
                        <li className="filter-style"> <CheckBoxComponent cssClass="school" name="Filter" value="School" label="School" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                        <li className="filter-style"> <CheckBoxComponent cssClass="tutoring" name="Filter" value="Tutoring" label="Tutoring" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                        <li className="filter-style"> <CheckBoxComponent cssClass="other-course" name="Filter" value="Other Course" label="Other Course" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                        <li className="filter-style"> <CheckBoxComponent cssClass="meeting" name="Filter" value="Meeting" label="Meeting" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                        <li className="filter-style"> <CheckBoxComponent cssClass="hangout" name="Filter" value="Hangout" label="Hangout" checked={true} onChange={(this.filterActivities.bind(this))}/> </li>
                    </ul>

                    

                </div>   

            </React.Fragment>

                
            

        );
    }

}

export default Calendar