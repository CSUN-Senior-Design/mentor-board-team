import React, { Component } from 'react'

import Header from './Header';
import Calendar from './Calendar';

import * as dataSource from '../Datasources/scheduleData.json';
import '../Css/schedule.css';

export class Schedule extends Component {

    render() {
        return (
            <React.Fragment>

                <div> <Header></Header> </div>
            
                <div className = 'schedulepage-body'>
                    
                    <Calendar />
                   
                   

                </div>
            
            </React.Fragment>
        )
    }
}

export default Schedule