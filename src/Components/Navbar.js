import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import Activities from './Activities';
import Messages from './Messages';
import Schedule from './Schedule';
import Tutors from './Tutors';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles} from '@material-ui/core'
import { fontSize } from '@material-ui/system';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      border: 0,
      borderRadius: 3,
      //boxShadow: '0 3px 5px 2px rgba()',
      color: 'white',
      width: 1000
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    loginButton:{
      fontSize: 50,
      marginLeft: theme.spacing(7),
    
    },
    title: {
      flexGrow: 1,
      fontSize: 120,
    },
  }));

export class Navbar extends Component {
    render() {
        const {classes} = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
        <div style={{
                position: 'absolute', left: '10%'
            }}>

            <IconButton component={NavLink} to= "/home" edge="start" className={classes.menuButton} color="red" aria-label="menu">
                Home
            </IconButton>
            <IconButton component={NavLink} to= "/schedule" edge="start" className={classes.menuButton} color="red" aria-label="menu">
                Schedule
            </IconButton>
            <IconButton component={NavLink} to= "/activities" edge="start" className={classes.menuButton} color="red" aria-label="menu">
                Activities
            </IconButton>
            <IconButton component={NavLink} to= "/tutors" edge="start" className={classes.menuButton} color="red" aria-label="menu">
                Tutors
            </IconButton>
            <IconButton component={NavLink} to= "/messages" edge="start" className={classes.menuButton} color="red" aria-label="menu">
                Messages
              
            </IconButton>
          </div>


          <div style={{ position: 'absolute', left: '50%' }} >
            <Typography variant="h4" className={classes.title}>
             Mentorboard
           </Typography>
          </div>


          <div style={{ position: 'absolute', right: '0%' }} >
            <Button className={classes.loginButton} color="inherit">Login</Button>
          </div>

        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/activities" component={Activities}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/tutors" component={Tutors}/>
            <Route path="/home" component={Home}/>
            <Route path="/" />
        </Switch>

      </Router>
    </div>
  );
    }
}

export default withStyles(useStyles)(Navbar);
