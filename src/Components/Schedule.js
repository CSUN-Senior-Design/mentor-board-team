import React, { Component } from 'react'

import Header from './Header';
import Calendar from './Calendar';

import * as dataSource from '../Datasources/scheduleData.json';
import '../Css/schedule.css';

export class Schedule extends Component {

    constructor(){
        super(...arguments);

        this.scheduleObj = React.createRef();
    }

    filterCalendar(){
        this.scheduleObj.filterData(dataSource.filteredActivities);
        console.log(this.scheduleObj);
    }


    render() {
        return (
            <React.Fragment>

                <div> <Header></Header> </div>
            
                <div className = 'schedulepage-body'>
                    
                    <Calendar ref={this.scheduleObj} />
                   
                   

                </div>
            
            </React.Fragment>
        )
    }
}

export default Schedule