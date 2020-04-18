import React, { Component } from 'react'

import Header from './Header';
import Calendar from './Calendar';
import Searchbar from './Searchbar';
import FilterPanel from './FilterPanel';
import AlertsPanel from './AlertsPanel';

import { extend } from '@syncfusion/ej2-base';

import { activities } from '../Datasources/scheduleData.js';
import { scheduleStudentResource } from '../Datasources/scheduleData.js';

import '../Css/schedule.css';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';

var calendarData = extend([], activities, null, true)
var calendarResources =  extend([], scheduleStudentResource, null, true)

export class Schedule extends Component {

    //Takes in data passed in either from a searcher and sets the schedules appointments to it.
    setSearchData(data, searchText){
        this.calendarRef.setFilteredData(data);

        if (searchText !== "")
            this.filtersRef.disableFilters();

        else this.filtersRef.enableFilters();
    }

    setFilteredData(data){
        this.calendarRef.setFilteredData(data);

        if (!this.filtersRef.isFiltering())
            this.searchbarRef.clear()
    }

    getCalendarOccurances(startDate, endDate){
        let occurances = this.calendarRef.getOccurrencesByRange(startDate, endDate);
    }

    render() {
        return (
            <React.Fragment>

                <div> <Header></Header> </div>
            
                <div className = 'schedulepage-body'>
                    
                    <Calendar 
                        calendarData = {calendarData}
                        calendarResourceData = {calendarResources}
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
                                calendarInitialData = {calendarData} 
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
                                    data = {calendarData}
                                    setFilteredData = {(this.setFilteredData.bind(this))}
                                /> 
                        </div>

                        <div className = "alerts-body">
                            <div className = "alerts-header"> Alerts </div>
                            
                            <AlertsPanel
                                data = {calendarData}
                                getCalendarOccurances = {(this.getCalendarOccurances.bind(this))}
                            />

                        </div>

                    </div>

                </div>
            
            </React.Fragment>
        )
    }
}

export default Schedule