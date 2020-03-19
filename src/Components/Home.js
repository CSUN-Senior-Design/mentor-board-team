import React, { Component } from 'react'
import Header from "./Header"
import Login from "./Login"

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <Header/>
            </div>
            <div>
                <Login/>
            </div>
            </React.Fragment>
        )
    }
}

export default Home
