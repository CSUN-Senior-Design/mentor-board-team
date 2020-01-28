import React, { Component } from 'react'
import Header from "./Header"

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <Header/>
            </div>
            <div>
                <h2>Home</h2> 
            </div>
            </React.Fragment>
        )
    }
}

export default Home
