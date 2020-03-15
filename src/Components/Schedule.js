import React, { Component } from 'react'
import { render } from 'react-dom';
import Header from './Header';
import Calendar from './Calendar'
import SearchBar from './SearchBar'


export class Schedule extends Component {



    render() {
        return (
            <React.Fragment>

                <div style={{ position: 'relative', zIndex: '1'}}>
                    <Header></Header>
                </div>
            
                <div style={{ position: 'absolute', left: '20%', right: '20%', zIndex: '10'}}>
                    <Calendar/>,
                </div>
                

            </React.Fragment>
        );
      }
}

export default Schedule