import React, { Component } from 'react'
import { render } from 'react-dom';
import Header from './Header';
import Calendar from './Calendar'
import CourseSideBar from './CourseSideBar'



export class Schedule extends Component {



    render() {
        return (
            <React.Fragment>

                <div 
                    ref= {navBar => this.navBarObj = navBar}
                >
                    <Header></Header>
                </div>
            
            <div className = 'schedulepage-body'>
                <div className = 'scheduler-component'
                    ref= {calendar => this.calendarObj = calendar}
                >
                    <Calendar/>
                </div>
                
                <div className = "treeview-body">
                    <div className = 'treeview-title-container'> Available Courses </div>
                    <div className = 'treeview-component'>
                        <CourseSideBar/>
                    </div>
                </div>

                <div className = 'adbar-body'> Ads Region </div>

            </div>
            
            </React.Fragment>
        );
    }
}

export default Schedule