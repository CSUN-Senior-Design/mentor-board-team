import React, { Component } from 'react'
import Header from "./Header"

import CircularProgress from '@material-ui/core/CircularProgress';
import CustomTable from './CustomTable';
import { extend } from '@syncfusion/ej2-base';

import { payments } from '../Datasources/homeData.js';
import { paymentsColumns } from '../Datasources/homeData.js';
import { paymentsMapping } from '../Datasources/homeData.js';
import { schoolEvents } from '../Datasources/homeData.js';
import { eventsSchoolColumns } from '../Datasources/homeData.js';
import { eventsSchoolMapping } from '../Datasources/homeData.js';
import { courseProgress } from '../Datasources/homeData.js';
import { progressColumns } from '../Datasources/homeData.js';
import { progressMapping } from '../Datasources/homeData.js';

import '../Css/home.css';

const paymentsData = extend([], payments, null, true)
const paymentsCols = extend([], paymentsColumns, null, true)

const progress = extend([], courseProgress, null, true)

export class Home extends Component {

   constructor(props){
      super(props)

      this.getCourseProgress = this.getCourseProgress.bind(this);
      this.getProgressData = this.getProgressData.bind(this);

      this.state = {
         tableHeader: "Assignments/Exams",
         eventsData: schoolEvents,
         eventsColumns: eventsSchoolColumns,
         eventsTableMapping: eventsSchoolMapping,
         progressData: this.getProgressData()
      }

   }

   getCourseProgress(progVal){
      return (
         <div className = "circular-progress-container">
            <div className = "circular-progress-text">{progVal}%</div>
            <CircularProgress variant="static" value={progVal} size = {50} thickness = {4}/>
         </div>
      )
   }

   getProgressData(){

      let progressions = progress.map((item, i) => {

         return (
            {
               id: i,
               Course: item.Course,
               OverallProgress: this.getCourseProgress(item.OverallProgress),
               Performance: this.getCourseProgress(item.Performance)
            }
         )
      })

      return progressions
   }

   render() {
      return (
         <React.Fragment>
            <div>
               <Header />
            </div>

            <div className = "home-body">
               
               <div className = "progress-table-body">
                  <div className = "progress-table-container">
                     <div className = "home-progress-header"> Course Progression </div>
                     <CustomTable
                        data = {this.state.progressData}
                        tableHeader = {progressColumns}
                        mapping = {progressMapping}
                        elevation = {3}
                        containerStyle = {{
                           minHeight: 100, 
                           maxHeight: 600, 
                           minWidth: 150,
                           maxWidth: 350,
                           overflow: "auto"
                        }}
                     />
                  </div>
               </div>


               <div className = "home-events-body">
                  <div className = "home-events-container">
                     <div className = "home-events-header"> {this.state.tableHeader} </div>
                     <CustomTable
                        data = {this.state.eventsData}
                        tableHeader = {this.state.eventsColumns}
                        mapping = {this.state.eventsTableMapping}
                        elevation = {3}
                        containerStyle = {{
                           minHeight: 150, 
                           maxHeight: 600, 
                           minWidth: 150,
                           maxWidth: 1000
                        }}
                     />
                  </div>
               </div>

               <div className = "home-payments-container">
                  <div className = "home-payments-header"> Payments Due </div>
                  <CustomTable
                     data = {paymentsData}
                     tableHeader = {paymentsCols}
                     mapping = {paymentsMapping}
                     elevation = {3}
                     containerStyle = {{
                        minHeight: 100, 
                        maxHeight: 600, 
                        minWidth: 150,
                        maxWidth: 350,
                        overflow: "auto"
                     }}
                  />
               </div>        
               
            </div>

         </React.Fragment>
      );
   }
}

export default Home;
