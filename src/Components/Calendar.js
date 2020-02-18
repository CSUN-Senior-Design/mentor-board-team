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
import { render } from 'react-dom';

import {Inject, ScheduleComponent, ViewsDirective, ViewDirective, Week, Month, Agenda,
        DragAndDrop, Resize, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

import { closest, remove, addClass } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

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

const FIELD_STR_MIN_LEN = 5;
const FIELD_STR_MAX_LEN = 100;

export class Calendar extends Component {

    constructor(){
        super();

        this.minValidation = (args) => {
            return args['value'].length >= FIELD_STR_MIN_LEN;
        }

        this.maxValidation = (args) => {
            return args['value'].length <= FIELD_STR_MAX_LEN;
        }

        //Holds all of the main activities for the calendar demo.  Activities all start from Feb 10, 2020.
        this.data = [
            {
                //Default calendar appointment fields.  These are the fields that ej2 recognizes and injects them into the calendar views. 
                id: 1,
                Subject: "Guitar Class",
                Description: "Advanced cords and melodies with Professor Kobain",
                Location: "1445 Maple, Glendale",
                StartTime: new Date(2020, 1, 10, 8, 30),
                EndTime: new Date(2020, 1, 10, 10, 30),
                IsAllDay: false,

                //This recurrence rule states that the guitar lesson will appear on the calendar every week on mondays, wednesdays, and fridays.  Ends after 15 classes.
                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;COUNT=15',
                
                //Activity type classifier.  Used to auto-apply custom styling based on the type of event.
                //Activity Types:  1 = School Class, 2 = Tutoring Session, 3 = Other Course, 4 = Meeting, 5 = Hangout
                ActivityType: 3
            },

            {
                id: 2,
                Subject: "Comp 666",
                Description: "Skynet crash course",
                Location: "822 fischer, Glendale",
                StartTime: new Date(2020, 1, 10, 12, 30),
                EndTime: new Date(2020, 1, 10, 14, 30),
                IsAllDay: false,

                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,TH;COUNT=15;',

                ActivityType: 1
            },

            {
                id: 3,
                Subject: "Dabbing Lessons",
                Description: "Show the haters whose boss",
                Location: "1337 Skeet, Glenoaks",
                StartTime: new Date(2020, 1, 10, 16, 0),
                EndTime: new Date(2020, 1, 10, 20, 0),
                IsAllDay: false,

                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE;COUNT=15;',
                
                ActivityType: 3
            },

            {
                id: 4,
                Subject: "Break Time",
                StartTime: new Date(2020, 1, 10, 14, 45),
                EndTime: new Date(2020, 1, 10, 15, 50),
                IsAllDay: false,
                IsBlock: true,
                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;COUNT=15;'
            },

            {
                id: 5,
                Subject: "Taking the day off",
                StartTime: new Date(2020, 1, 15),
                EndTime: new Date(2020, 1, 15),
                IsAllDay: true,
                IsBlock: true
            },

            {
                id: 6,
                Subject: "Lunch With Dave",
                Description: "Going out for sushi",
                Location: "987 Fairview, Glenoaks",
                StartTime: new Date(2020, 1, 11, 15, 0),
                EndTime: new Date(2020, 1, 11, 16, 30),
                IsAllDay: false,
                ActivityType: 5
            },

            {
                id: 7,
                Subject: "JPL Meeting",
                Description: "Sudden board meeting scheduled with JPL lab",
                Location: "-REDACTED-",
                StartTime: new Date(2020, 1, 14, 11, 0),
                EndTime: new Date(2020, 1, 14, 13, 0),
                IsAllDay: false,
                ActivityType: 4
            },

            {
                id: 8,
                Subject: "Calculus Tutoring",
                Description: "Weekly friday tutoring to help me pass calculus III",
                Location: "822 fischer, Glendale",
                StartTime: new Date(2020, 1, 14, 14, 30),
                EndTime: new Date(2020, 1, 14, 16, 30),
                IsAllDay: false,

                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=FR;COUNT=15;',

                ActivityType: 2
            },
        ]

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
    }

    //Gets called whenever the user resizes an event sticker on the calendar.  Allows customizing various aspect of resizing operations.
    onResizeStart(args){
        args.interval = 1;  //Indicates the increments of time that events can be shifted when resized.  Currently set to 1 minute increments on the calendar grid.
    }

    render(){
        return(
            
            //The date for now will be set to February 10, 2020 for demo purposes.  
            //Future versions will use DataManager to grab server activity data.

                <ScheduleComponent height= '750px' cssClass='schedule-date-header-template' 
                    ref={calendar => this.calendarObj = calendar}
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
                    resizeStart={(this.onResizeStart.bind(this))}
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
            

        );
    }

}

export default Calendar