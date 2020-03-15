import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Sidebar from "./Sidebar";
import logo from "./Logos/mindhive2.png";
import IconButton from "@material-ui/core/IconButton";
import ToggleSwitch from "./ToggleSwitch.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <Typography
         component="div"
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && <Box p={4}>{children}</Box>}
      </Typography>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
   };
}

const useStyles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
   }
}));






class PrivateSetting extends React.Component {
   state = {
      data: [
         {
            id: 'showprofile',
            marked: false
         },
         {
            id: 'showaddress',
            marked: false
         },
         {
            id: 'showemail',
            marked: false
         },
         {
            id: 'showphonenumber',
            marked: false
         },
         {
            id: 'showbirthday',
            marked: false
         }
      ]
   }

   markPS = (id) => {
      console.log(id);
      this.setState({ data: this.state.data.map( i => {
         if(i.id === id) {
            i.marked = !i.marked
         }
         return i;
      }) });
   }

   render(){
      return <form>
         <section className = "SettingsContainer" style={settings_style}>
            <List component="nav" style={Styles_PrivacySetting} aria-label="mailbox folders">
               <ListItem>
                  <ListItemText primary="Show profile" />
                  <ToggleSwitch mark={this.markPS} id='showprofile' style={{float: 'right'}}/>
               </ListItem>
               <Divider />
               <ListItem>
                  <ListItemText primary="Show address" />
                  <ToggleSwitch mark={this.markPS} id='showaddress' style={{float: 'right'}}/>
               </ListItem>
               <Divider />
               <ListItem>
                  <ListItemText primary="Show email" />
                  <ToggleSwitch mark={this.markPS} id='showemail' style={{float: 'right'}}/>
               </ListItem>
               <Divider />
               <ListItem>
                  <ListItemText primary="Show phone number" />
                  <ToggleSwitch mark={this.markPS} id='showphonenumber' style={{float: 'right'}}/>
               </ListItem>
               <Divider />
               <ListItem>
                  <ListItemText primary="Show birthday" />
                  <ToggleSwitch mark={this.markPS} id='showbirthday' style={{float: 'right'}}/>
               </ListItem>
            </List>
         </section>
         <br></br>
   </form>;
   }
}

const settings_style = {
   display: "flex",
   justifyContent: "center"
}
const Styles_PrivacySetting = {
   width: '50%',
   maxWidth: '360',
   backgroundColor: 'theme.palette.background.paper'
}






export default function SimpleTabs() {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={classes.root}>
         <header className="App-header">
            <img
               src={logo}
               className="App-logo"
               alt="logo"
               style={{ width: "112px", height: "112px", padding: "10px" }}
            />
         </header>
         <AppBar position="static">
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="simple tabs example"
               variant="fullWidth"
            >
               <IconButton
                  component={Link}
                  to="/messages"
                  edge="start"
                  className={classes.menuButton}
                  color="red"
                  aria-label="menu"
               >
                  Back
               </IconButton>
               <Tab label="Profile Settings" {...a11yProps(1)} />
               <Tab label="Billing Information" {...a11yProps(2)} />
               <Tab label="Privacy Settings" {...a11yProps(3)} />
            </Tabs>
         </AppBar>
         <TabPanel value={value} index={1}>
            {/* INSERT COMPONENT HERE */}
            Item One
         </TabPanel>
         <TabPanel value={value} index={2}>
            {/* INSERT COMPONENT HERE */}
            Item Two
         </TabPanel>
         <TabPanel value={value} index={3}>
            
            {/* INSERT COMPONENT HERE */}
            <PrivateSetting />
            
         </TabPanel>
      </div>
   );
}
