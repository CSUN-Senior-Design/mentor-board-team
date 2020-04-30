import React, { Component } from 'react'
import Login from "./Login"
import "./css/landingpage.css"
import logo from "./Logos/mindhive2.png";
export class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className = "fixed-top">
                    <div className = "outer-container">
                        <img
                            src={logo}
                            className="logo"
                            alt="logo"
                        />
                        <div className= "inner-container">
                            <div className = "brand">
                                 MentorBoard
                            </div>
                            <div className = "menu">
                                Login and signup
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <Login/>
                </div>
                <div>
                    <Login/>
                </div>
                

            </React.Fragment>
        )
    }
}

export default LandingPage