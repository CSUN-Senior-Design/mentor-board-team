import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsNavbar from "./SettingsNavbar";

const useStyles = makeStyles({
   list: {
      width: 250
   },
   fullList: {
      width: "auto"
   }
});

export default function TemporaryDrawer() {
   const classes = useStyles();
   const [state, setState] = React.useState({
      left: false
   });

   const toggleDrawer = (side, open) => event => {
      if (
         event.type === "keydown" &&
         (event.key === "Tab" || event.key === "Shift")
      ) {
         return;
      }

      setState({ ...state, [side]: open });
   };

   const sideList = side => (
      <div
         className={classes.list}
         role="presentation"
         onClick={toggleDrawer(side, false)}
         onKeyDown={toggleDrawer(side, false)}
      >
         <List>
            {["Settings", "Messages", "Option 3", "Option 4"].map(
               (text, index) => (
                  <ListItem
                     button
                     key={text}
                     component={Link}
                     to="/SettingsNavbar"
                     edge="start"
                  >
                     <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                     </ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               )
            )}
         </List>
         <Divider />
         <List>
            {["About Us", "Contact Us"].map((text, index) => (
               <ListItem
                  button
                  key={text}
                  component={Link}
                  to="/activityinfopage"
                  edge="start"
               >
                  <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
               </ListItem>
            ))}
         </List>
      </div>
   );

   return (
      <div>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
            edge="start"
         >
            <MenuIcon />
         </IconButton>
         <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
         </Drawer>
      </div>
   );
}
