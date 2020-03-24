import React, { Component } from 'react'
import { render } from 'react-dom';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { closest, remove, addClass } from '@syncfusion/ej2-base';

import Header from './Header';
import Calendar from './Calendar'

//CSS Style imports for ej2-react-schedule
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";

export class Schedule extends Component {

    constructor(){
        super(...arguments);

        this.calendarRef = React.createRef()
        this.sidebarRef = React.createRef()

        //Local variables necessary for the side-bar dragndrop features.
        this.isTreeItemDropped = false;
        this.draggedItemId = '';
        this.allowDragAndDrops = true;

                //Holds all of the general courses available to everyone.  These courses haven't been added yet to the user's calendar, but they can be dragged into the calendar directly.
                this.coursesAvailable = [
                    {
                        id: '1',
                        courseName: 'Comp 256 Tutoring',
                        instructor: 'Richard Lorentz',
                        reviews: '2.3',
                        imgUrl: 'https://www.csun.edu/~lorentz/images/me.jpg'
                    },
        
                    {
                        id: '2',
                        courseName: 'Personal Gym Trainer',
                        instructor: 'Some Guy',
                        reviews: '4.4',
                        imgUrl: 'https://cdn.clipart.email/8aa653ea6ed1fb3c58f507ae5ff87502_male-head-portrait-silhouette-h-m-coloring-pages_670-867.gif'
                    },
        
                    {
                        id: '3',
                        courseName: 'Comp 310 Tutoring',
                        instructor: 'Richard Lorentz',
                        reviews: '1.9',
                        imgUrl: 'https://www.csun.edu/~lorentz/images/me.jpg'
                    },
        
                    {
                        id: '4',
                        courseName: 'Time Waster',
                        instructor: 'Useless Idiot',
                        reviews: '5.0',
                        imgUrl: 'https://cdn.clipart.email/8aa653ea6ed1fb3c58f507ae5ff87502_male-head-portrait-silhouette-h-m-coloring-pages_670-867.gif'
                    }
                ];
        
                this.fields = { dataSource: this.coursesAvailable, id: 'id', text: 'courseName' };
                this.cssClass= "treeview-item";

    }

    //Sets the custom styling of every node item listed inside the course sidebar panel.
    nodeTemplate(data) {
        return (<div>
        <img className='treeview-image' src={data.imgUrl} alt=''/>
        <div className='treeview-course-name'>{data.courseName}</div>
        <div className='treeview-extra'>{data.instructor}</div>
        <div className='treeview-extra'>Review: {data.reviews}</div>
        </div>);
        
    }

    //handles when the user stops dragging a node item from the course sidebar.
    onTreeDragStop(event) {

        let treeElement = closest(event.target, '.e-treeview');
        let classElement = this.calendarRef.element.querySelector('.e-device-hover');

        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }

        if (!treeElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');

            if (scheduleElement) {
                let treeviewData = this.sidebarRef.fields.dataSource;

                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = this.calendarRef.getCellDetails(event.target);
                    
                    let eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description
                    };

                    this.calendarRef.openEditor(eventData, 'Add', true);
                    this.isTreeItemDropped = true;
                    this.draggedItemId = event.draggedNodeData.id;
                }
            }
        }
    }

    //handles when the user is doing a drag action from the course sidebar panel.
    onItemDrag(event) {
        if (this.calendarRef.isAdaptive) {
            let classElement = this.calendarRef.element.querySelector('.e-device-hover');
           
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
           
            if (event.target.classList.contains('e-work-cells')) {
                addClass([event.target], 'e-device-hover');
            }
        }

        if (document.body.style.cursor === 'not-allowed') {
            document.body.style.cursor = '';
        }

        if (event.name === 'nodeDragging') {
            let dragElementIcon = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');

            for (let i = 0; i < dragElementIcon.length; i++) {
                dragElementIcon[i].style.display = 'none';
            }
        }
    }

    //handles when the user initiates a dragging action from the course sidebar panel.
    onActionBegin(event) {
        if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
            let treeViewdata = this.sidebarRef.fields.dataSource;
            const filteredPeople = treeViewdata.filter((item) => item.Id !== parseInt(this.draggedItemId, 10));
            this.sidebarRef.fields.dataSource = filteredPeople;
            let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');

            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    }


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
                >
                    <Calendar
                        ref={(calendarRef) => { this.child = calendarRef; }}
                    />
                </div>
                
                <div className = "treeview-body">
                    <div className = 'treeview-title-container'> Available Courses </div>
                    <div className = 'treeview-component'>
                        <TreeViewComponent 
                            ref={this.sidebarRef}
                            fields={this.fields}
                            allowDragAndDrop={this.allowDragAndDrops}
                            nodeTemplate={this.nodeTemplate}
                            cssClass={this.cssClass}
                            nodeDragStop={this.onTreeDragStop.bind(this)} 
                            nodeDragging={this.onItemDrag.bind(this)} 
                            >
                        </TreeViewComponent>
                    </div>
                </div>

                <div className = 'adbar-body'> Ads Region </div>

            </div>
            
            </React.Fragment>
        );
    }
}

export default Schedule