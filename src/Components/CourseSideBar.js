import React, { Component } from 'react';
import { render } from 'react-dom';

import { closest, remove, addClass } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

//CSS Style imports for ej2-react-schedule
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";

export class CourseSideBar extends Component {

    constructor(){
        super(...arguments);

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

    //Sets the custom styling of every node item listed.
    nodeTemplate(data) {
        return (<div>
        <img className='treeview-image' src={data.imgUrl} alt=''/>
        <div className='treeview-course-name'>{data.courseName}</div>
        <div className='treeview-extra'>{data.instructor}</div>
        <div className='treeview-extra'>Review: {data.reviews}</div>
      </div>);
      
    }

    onTreeDragStop(event) {

        let treeElement = closest(event.target, '.e-treeview');
        let classElement = this.calendarObj.element.querySelector('.e-device-hover');

        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }

        if (!treeElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');

            if (scheduleElement) {
                let treeviewData = this.treeObj.fields.dataSource;

                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = this.calendarObj.getCellDetails(event.target);
                    
                    let eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description
                    };

                    this.calendarObj.openEditor(eventData, 'Add', true);
                    this.isTreeItemDropped = true;
                    this.draggedItemId = event.draggedNodeData.id;
                }
            }
        }
    }
    
    onItemDrag(event) {
        if (this.calendarObj.isAdaptive) {
            let classElement = this.calendarObj.element.querySelector('.e-device-hover');
           
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

    onActionBegin(event) {
        if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
            let treeViewdata = this.treeObj.fields.dataSource;
            const filteredPeople = treeViewdata.filter((item) => item.Id !== parseInt(this.draggedItemId, 10));
            this.treeObj.fields.dataSource = filteredPeople;
            let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');

            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    }

    render(){
        return(
            <TreeViewComponent 
            ref={tree => this.treeObj = tree}
            fields={this.fields}
            allowDragAndDrop={this.allowDragAndDrops}
            nodeTemplate={this.nodeTemplate}
            cssClass={this.cssClass}
            nodeDragStop={this.onTreeDragStop.bind(this)} 
            nodeDragging={this.onItemDrag.bind(this)} 
            >
            </TreeViewComponent>

        ); 
    }
}

export default CourseSideBar