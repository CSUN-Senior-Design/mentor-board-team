import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import logo from "./Logos/mindhive2.png";

export class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>MentorBoard</h1>
                </header>
                <div>
                    <Navbar style={{ height: '500pt'}} />
                </div> 
            </div>
        )
    }
}

export default Header