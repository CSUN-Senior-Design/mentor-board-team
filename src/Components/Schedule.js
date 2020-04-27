import React, { Component } from 'react'

import Header from './Header';
import Calendar from './Calendar';
import Searchbar from './Searchbar';
import FilterPanel from './FilterPanel';
import CustomTable from './CustomTable';

import { extend } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { activities } from '../Datasources/scheduleData.js';
import { scheduleStudentResource } from '../Datasources/scheduleData.js';
import { scheduleAlertsColumns } from '../Datasources/scheduleData.js';
import { scheduleAlertsMapping } from '../Datasources/scheduleData.js';

import '../Css/schedule.css';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';

// var calendarData = extend([], activities, null, true)
// var calendarResources =  extend([], scheduleStudentResource, null, true)
const ALERTS_SEARCH_RANGE_DEFAULT = 7

export class Schedule extends Component {

    constructor(props){
        super(props)

        this.calendarRef = React.createRef()

        this.state = {
            calendarData: extend([], activities, null, true),
            calendarResources: extend([], scheduleStudentResource, null, true),
            alertsRange: ALERTS_SEARCH_RANGE_DEFAULT
        }
    }
    
    //Takes in data passed in from the searcher and sets the schedules appointments to it.
    setSearchData(data, searchText){
        this.calendarRef.setFilteredData(data);

        if (searchText !== "")
            this.filtersRef.disableFilters();

        else this.filtersRef.enableFilters();
    }

    //Takes in filtered data from the FilterPanel component and sets the schedule appointments to it.
    setFilteredData(data){
        this.calendarRef.setFilteredData(data);

        if (!this.filtersRef.isFiltering())
            this.searchbarRef.clear()
    }

    onAlertRangeChange(args){
        let searchRange = args.value;

        let today = new Date()
        let searchEndDate = new Date(today.getTime() + (searchRange * 86400000));

        let recurringActivities = this.calendarRef.getOccurances(today, searchEndDate);
        let nonrecurringActivities = this.state.calendarData.filter(activity => activity.Priority > 0)

        let finalActivities = recurringActivities.concat(nonrecurringActivities)

        this.alertsRef.printAlerts(finalActivities);
    }

    render() {
        return (
            <React.Fragment>

                <div> <Header></Header> </div>
            
                <div className = 'schedulepage-body'>
                    
                    <Calendar 
                        calendarData = {this.state.calendarData}
                        calendarResourceData = {this.state.calendarResources}
                        ref = {ScheduleComponent => this.calendarRef = ScheduleComponent}
                        cssStyle = "schedulepage-calendar"
                    />
                   
                    <div className = "schedulepage-extras">

                        <div className = "searchbar-body">

                            <div className = "searchbar-header"> Search: </div>
                            
                            <Searchbar 
                                ref = {Searchbar => this.searchbarRef = Searchbar}
                                cssStyle = "searchbar"
                                name = "calendarSearch" 
                                type = "text"
                                placeholder = "Activity Name" 
                                calendarInitialData = {this.state.calendarData} 
                                setSearchData = {(this.setSearchData.bind(this))}
                            /> 

                        </div>
                        

                        <div className = "schedulepage-filters">

                            <div className="filters-header"> Filters </div>
                                <FilterPanel 
                                    ref = {FilterPanel => this.filtersRef = FilterPanel}
                                    cssClass = "schedulepage-filters"
                                    name = "Calendar Filters"
                                    label = "Filters"
                                    checked = {true} 
                                    data = {this.state.calendarData}
                                    setFilteredData = {(this.setFilteredData.bind(this))}
                                /> 
                        </div>

                        <div className = "alerts-body">
                            <div className = "alerts-header"> Alerts </div>
                            
                                <CustomTable
                                    ref = {NumericTextBoxComponent => this.alertsRef = NumericTextBoxComponent}
                                    data = {[]}
                                    elevation = {5}
                                    tableHeader = {scheduleAlertsColumns}
                                    mapping = {scheduleAlertsMapping}
                                    containerStyle = {{
                                        minHeight: 75, 
                                        maxHeight: 435, 
                                        minWidth: 150,
                                        maxWidth: 650,
                                        overflow: "auto"
                                    }}
                                />

                            <div className = "alerts-range-panel">
                            
                                <NumericTextBoxComponent 
                                    value = {this.state.alertsRange} 
                                    placeholder = "Search Range"
                                    floatLabelType = {'Always'}
                                    style = {{width: 100, height: "35px"}} 
                                    decimals = {0} 
                                    validateDecimalOnType = {true} 
                                    onChange = {(this.onAlertRangeChange.bind(this))}
                                    />
                            </div>

                        </div>

                    </div>

                </div>
            
            </React.Fragment>
        )
    }
}

export default Schedule