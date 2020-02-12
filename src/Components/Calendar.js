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
        EventSettingsModel, DragAndDrop, Resize} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

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



export class Calendar extends Component {

    constructor(){
        super();

        this.data = [
            {
                id: 1,
                Subject: "Guitar Class",
                Description: "Advanced cords & melodies with Professor Kobain",
                Location: "1445 Maple, Glendale",
                StartTime: new Date(2020, 1, 10, 8, 30),
                EndTime: new Date(2020, 1, 10, 10, 30),
                IsAllDay: false,

                //This recurrence rule states that the guitar lesson will appear on the calendar every week on mondays, wednesdays, and fridays.  Ends after 15 classes.
                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;COUNT=15'
            },

            {
                id: 2,
                Subject: "Comp 666",
                Description: "Skynet crash course",
                Location: "822 fischer, Glendale",
                StartTime: new Date(2020, 1, 10, 12, 30),
                EndTime: new Date(2020, 1, 10, 14, 30),
                IsAllDay: false,

                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,TH;COUNT=15;'
            },

            {
                id: 3,
                Subject: "Dabbing Lessons",
                Description: "Show the haters whose boss",
                Location: "1337 Skeet, Glenoaks",
                StartTime: new Date(2020, 1, 10, 16, 0),
                EndTime: new Date(2020, 1, 10, 20, 0),
                IsAllDay: false,

                RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE;COUNT=15;'
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
            }
        ]
    }

    onDragStart(args) {
        args.interval = 1;
    }

    onResizeStart(args){
        args.interval = 1;
    }

    render(){
        return(
            
            //The date for now will be set to February 10, 2020 for demo purposes.  
            //Future versions will use DataManager to grab server activity data.

            <ScheduleComponent width='80%' height= '500px' cssClass='schedule-date-header-template' 
                selectedDate= {new Date(2020, 1, 10)}
                eventSettings={{dataSource: this.data}}
                dragStart={(this.onDragStart.bind(this))}
                resizeStart={(this.onResizeStart.bind(this))}
            >
                <Inject services = {[ Week, Month, Agenda, DragAndDrop, Resize ]}/>

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