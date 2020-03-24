import React, { Component } from 'react'
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import logo from "./Logos/mindhive2.png";
import Button from '@material-ui/core/Button';
import Login from "./Login"

export class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div className = "Front-page">
                    <img src={logo} height = "55%" alt="logo" />
                    <h1>MentorBoard</h1>
                    <Button variant="contained" color="primary" href="#About">
                    About
                    </Button>
                    <Button variant="contained" color="primary" href="home">
                    Login
                    </Button>
                </div> */}
                <div>
                    <Login/>
                </div>
                {/* <div id = "About"className = "About">
                    <h1>about</h1>
                </div> */}
            </React.Fragment>
        )
    }
}

export default LandingPage