import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Activities from "./Activities";
import Messages from "./Messages";
import Schedule from "./Schedule";
import Tutors from "./Tutors";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";
import { fontSize } from "@material-ui/system";
import SettingsNavbar from "./SettingsNavbar";
import Sidebar from "./Sidebar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
   root: {
      border: 0,
      borderRadius: 3,
      //boxShadow: '0 3px 5px 2px rgba()',
      color: "white",
      width: 1000
   },
   menuButton: {
      marginRight: theme.spacing(10)
   },
   loginButton: {
      fontSize: 50,
      marginLeft: theme.spacing(7)
   },
   title: {
      flexGrow: 1,
      fontSize: 120
   }
}));

export class Navbar extends Component {
   render() {
      const x = 5;
      const { classes } = this.props;

      return (
         <div className={classes.root}>
            <AppBar position="static">
               <Container>
                  <Toolbar>
                     <Sidebar />
                     <IconButton
                        component={Link}
                        to="/Home"
                        edge="start"
                        className={classes.menuButton}
                        color="red"
                        aria-label="menu"
                     >
                        Home
                     </IconButton>
                     <IconButton
                        component={Link}
                        to="/schedule"
                        edge="start"
                        className={classes.menuButton}
                        color="red"
                        aria-label="menu"
                     >
                        Schedule
                     </IconButton>
                     <IconButton
                        component={Link}
                        to="/activities"
                        edge="start"
                        className={classes.menuButton}
                        color="red"
                        aria-label="menu"
                     >
                        Activities
                     </IconButton>
                     <IconButton
                        component={Link}
                        to="/tutors"
                        edge="start"
                        className={classes.menuButton}
                        color="red"
                        aria-label="menu"
                     >
                        Tutors
                     </IconButton>
                     <IconButton
                        component={Link}
                        to="/messages"
                        edge="start"
                        className={classes.menuButton}
                        color="red"
                        aria-label="menu"
                     >
                        Messages
                     </IconButton>

                     <Typography variant="h6" className={classes.title}>
                        Mentorboard
                     </Typography>
                     <Button className={classes.loginButton} color="inherit">
                        Login
                     </Button>
                  </Toolbar>
               </Container>
            </AppBar>

            <Switch>
               <Route path="/" />
               <Route path="/home" component={Home} />
               <Route path="/schedule" component={Schedule} />
               <Route path="/activities" component={Activities} />
               <Route path="/messages" component={Messages} />
               <Route path="/tutors" component={Tutors} />
            </Switch>
         </div>
      );
   }
}

export default withStyles(useStyles)(Navbar);
