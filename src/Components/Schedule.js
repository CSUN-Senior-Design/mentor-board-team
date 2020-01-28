import React, { Component } from 'react'
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Navbar from './Navbar';
import Header from './Header';
//import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export class Schedule extends Component {
    constructor(){
        super();
        const now = new Date();
const events = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 3, 0),
        end: new Date(2019, 3, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2019, 3, 7),
        end: new Date(2019, 3, 10),
    },

    {
        id: 2,
        title: 'Sprint Starts',
        start: new Date(2019, 9, 13, 0, 0, 0),
        end: new Date(2019, 9, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'Sprint ends',
        start: new Date(2019, 10, 6, 0, 0, 0),
        end: new Date(2019, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2019, 3, 9, 0, 0, 0),
        end: new Date(2019, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2019, 11, 11),
        end: new Date(2019, 11, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2019, 11, 12, 10, 30, 0, 0),
        end: new Date(2019, 11, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2019, 11, 12, 12, 0, 0, 0),
        end: new Date(2019, 11, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2019, 11, 12, 14, 0, 0, 0),
        end: new Date(2019, 11, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 11, 12, 17, 0, 0, 0),
        end: new Date(2019, 11, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Meeting with team',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 11,
        title: 'Current Point in Time',
        start: now,
        end: now, 
    },
    ]

    this.state = {
        name: 'React',
        events
      };

}
render() {
    return (
        <React.Fragment>
            <div>
                <Header></Header>
            </div>
            <div>
                <p>
                A test for the React Big Calendar.
                </p>
                <div style={{ height: '500pt'}}>
                <Calendar
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={moment().toDate()}
                    localizer={localizer}
                    />
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default Schedule
