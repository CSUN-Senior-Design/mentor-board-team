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
                <h1>Home</h1>
            </div>
            </React.Fragment>
        )
    }
}

export default Home
