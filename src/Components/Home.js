import React, { Component } from 'react'
import Header from "./Header"


import CustomTable from './CustomTable';
import { extend } from '@syncfusion/ej2-base';

import { payments } from '../Datasources/homeData.js';
import { paymentsColumns } from '../Datasources/homeData.js';
import { paymentsMapping } from '../Datasources/homeData.js';

import '../Css/home.css';

const paymentsData = extend([], payments, null, true)
const paymentsCols = extend([], paymentsColumns, null, true)

export class Home extends Component {


   render() {
      return (
         <React.Fragment>
            <div>
               <Header />
            </div>

            <div className = "home-container">

               <div className = "home-body">
                  
                  <div className = "home-payments-container">
                     <div className = "home-payments-header"> Payments Due </div>
                     <CustomTable
                        data = {paymentsData}
                        tableHeader = {paymentsCols}
                        mapping = {paymentsMapping}
                        elevation = {3}
                        containerStyle = {{
                           minHeight: 100, 
                           maxHeight: 700, 
                           minWidth: 150,
                           maxWidth: 350,
                           overflow: "auto"
                        }}
                     />
                  </div>

                  <div className = "home-events-body">
                     

                     <div className = "home-events-container">
                     <div className = "home-events-header"> Events </div>
                        <CustomTable
                           data = {paymentsData}
                           tableHeader = {paymentsCols}
                           mapping = {paymentsMapping}
                           elevation = {3}
                           containerStyle = {{
                              minHeight: 150, 
                              maxHeight: 700, 
                              minWidth: 200,
                              maxWidth: 600,
                              overflow: "auto"
                           }}
                        />

                     </div>
                     
                  </div>

               </div>

               <div className = "home-adbar">
                  Adbar
               </div>

            </div>



         </React.Fragment>
      );
   }
}

export default Home;
