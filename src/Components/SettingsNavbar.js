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
   render(){
      return <form>
      <fieldset>
         <legend>Settings</legend>
         <section className = "SettingsContainer" style={{ display: "flex", justifyContent: "center" }}>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "3em" }}>
            <label>Show profile</label>
            
            <label>Show address</label>
            
            <label>Show email in chats</label>
            
            <label>Show phone number</label>
            
            <label>Show birthday</label>
         </div>
         <div>
            Yes<input type="radio" name="show-profile" />
            No<input type="radio" name="show-profile" />
            <br></br>
            Yes<input type="radio" name="show-address" />
            No<input type="radio" name="show-address" />
            <br></br>
            Yes<input type="radio" name="show-email" />
            No<input type="radio" name="show-email" />
            <br></br>
            Yes<input type="radio" name="show-phonenumber" />
            No<input type="radio" name="show-phonenumber" />
            <br></br>
            Yes<input type="radio" name="show-birthday" />
            No<input type="radio" name="show-birthday" />
         </div>
         </section>
         <br></br>
      </fieldset>
   </form>;
   }
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
