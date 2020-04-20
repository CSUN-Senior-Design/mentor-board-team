import React, { Component } from 'react';

import {Inject, ScheduleComponent, ViewsDirective, ViewDirective, Week, Month, Agenda,
        DragAndDrop, Resize, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';

import {  createElement  } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

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
const FILTERS_MAX = 5;
const ALERT_SEARCH_RANGE_DEFAULT = 7;

export class Calendar extends Component {

    constructor(props){
        super(props);

        //Defines the columns for the sorting function inside the alerts table.
        //this.sortingOptions = scheduleAlertsSortingOptions;
        
        this.state = {
            data: props.calendarData,
            itemDragStartDate: null,
            itemDragEndDate: null,
            // alertData: null,
            // alertsRange: ALERT_SEARCH_RANGE_DEFAULT,
            // alertsSortingOptions: scheduleAlertsSortingOptions[0]
        }
        
        this.minValidation = (args) => {
            return args['value'].length >= FIELD_STR_MIN_LEN;
        }

        this.maxValidation = (args) => {
            return args['value'].length <= FIELD_STR_MAX_LEN;
        }

        this.getOccurances = this.getOccurances.bind(this);
    }

    onPopupOpen(args) {
        if (args.type === 'Editor') {
            if (!args.element.querySelector('.custom-field-row')) {
                let priorityDiv = createElement('div', { className: 'editor-priority-container' });

                let formElement = args.element.querySelector('.e-schedule-form');

                formElement.firstChild.insertBefore(priorityDiv, formElement.firstChild.children[5]);

                let priorityContainer = createElement('div', { className: 'editor-priority-container' });
                let priorityInputEle = createElement('input', {
                    className: 'e-field', attrs: { name: 'EventType' }
                });

                priorityContainer.appendChild(priorityInputEle);
                priorityDiv.appendChild(priorityContainer);

                let priorityField = new NumericTextBoxComponent(
                    {
                        floatLabelType: 'Always', 
                        placeholder: 'Priority',
                        width: 75
                    }
                );

                priorityField.appendTo(priorityInputEle);
                priorityInputEle.setAttribute('name', 'Priority');
            }
        }
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

    setFilteredData(data){
        this.scheduleObj.dataSource = data;
        
        this.setState({
            data: data
        })

    }

    getOccurances(startDate, endDate){
        let occurances = this.scheduleObj.getOccurrencesByRange(startDate, endDate)
        let priorityOccurances = occurances.filter(activity => activity.Priority > 0);
        return priorityOccurances;
    }

    render(){
        return(
        
            <div className = {this.props.cssStyle}>

                <ScheduleComponent 
                    height="97.5%"
                    ref={schedule => this.scheduleObj = schedule}
                    selectedDate= {new Date()}
                    eventSettings={{ 
                        dataSource: this.state.data,
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
                            endTime: { name: 'EndTime', validation: {  date: true }},
                            Priority: {name: 'Priority', title: 'Priority'}
                        }}}
                    
                    dragStart={(this.onDragStart.bind(this))}
                    dragStop={(this.onDragStop.bind(this))}
                    resizeStart={(this.onResizeStart.bind(this))}
                    actionBegin={this.onActionBegin.bind(this)}
                    popupOpen={this.onPopupOpen.bind(this)}
                >
                <Inject services = {[ Week, Month, Agenda, DragAndDrop, Resize ]}/>

                <ResourcesDirective>
                    <ResourceDirective
                        field='ActivityType'
                        title='Activity Type'
                        name='Activities'
                        allowMultiple={true}
                        dataSource={this.props.calendarResourceData}
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

        );
    }

}

export default Calendar