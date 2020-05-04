import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import logo from "./Logos/mindhive2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0,
    borderRadius: 3,
    //boxShadow: '0 3px 5px 2px rgba()',
    color: "white",
    width: 1000,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  loginButton: {
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
    const x = 5;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <div>
                <Sidebar></Sidebar>
              </div>
              <IconButton
                component={Link}
                to="/home"
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
              <div>
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  style={{
                    display: "inline",
                    width: "70px",
                    height: "70px",
                    padding: "10px",
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Navbar);
