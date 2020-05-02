import React, { Component } from 'react'
import Login from "./Login"
import "./css/landingpage.css"
import logo from "./Logos/mindhive2.png";
import Slideshow from "./LandingPage/Slideshow2"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";


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
                                <Popup
                                    trigger = {<Button color="black" className = "menu-buttons">Sign in</Button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                    <Login/>
                                </Popup>
                                <Popup
                                     trigger = {<Button variant="outlined" color="primary" className = "menu-buttons">
                                    Sign up
                                    </Button>}
                                    modal
                                    closeOnDocumentClick
                                >
                                    <Login/>
                                </Popup>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className = "bg-image-full bg-img-1">
                        <div className= "text-container"> 
                            <h1 className = "quote">
                                The Best Time to Learn Was Yesterday
                            </h1>
                            <h2 className = "subquote">
                                The Next Best Time is Now! Explore and Enroll Now Here at MentorBoard.
                            </h2>
                            <div className= "join-button">
                                <Popup
                                    trigger = {<Button variant="contained" color="primary" href="#contained-buttons" disableElevation>
                                        Join for Free
                                    </Button>}
                                     modal
                                     closeOnDocumentClick
                                >
                                    <Login/>
                                </Popup>
                            </div>
                        </div>
                </div>
                <div className = "about">
                         <h1>
                            MentorBoard: a knowledge platform.
                        </h1>
                        <h2>
                            MentorBoard is a website that bridges the gap between instructors and students. MentorBoard allows users to search for any type of instructor in their area ranging from subjects that range from academic type classes (i.e. math and english) to more extracurricular such as guitar playing or archery. Users are able to review and rate instructors as well as recommend them to other students. Students are also able to instantly communicate with the instructor if they have additional questions or want to make any scheduling changes, etc.
                        </h2>
                </div>
                <div className = "bg2-container">
                    <div className= "bg2">

                    </div>
                </div>
                <div className = "slideshow-container">
                    <div className = "slideshow">
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <p>
                                    yo whatup bros ddsadsadas dssad sdas dsad sad sa dsa.
                                </p>
                            </Grid>
                            <Grid item xs={8}>
                                
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default LandingPage