import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import courseData from "./Courses";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import '@brainhubeu/react-carousel/lib/style.css';



const useStyles = makeStyles((theme) => ({
   root: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-around',
     overflow: 'hidden',
     backgroundColor: theme.palette.background.paper,
   },
   gridList: {
     flexWrap: 'nowrap',
     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
     transform: 'translateZ(0)',
   },

   titleBar: {
     background:
       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
   },
 }));

 export default function CourseItem() {
   const classes = useStyles();
 
   return (
     <React.Fragment>
      <div className="Container">
         <div className="Title">
            <h1>Top courses</h1>
         </div>
         <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
               {courseData.map((tile) => (
               <GridListTile 
               component={Link}
               to={'/activityinfopage/' + tile.key} 
               edge="start"
               key={tile.image_url}>
                  <img src={tile.image_url} alt={tile.class_name} />
                  <GridListTileBar 
                     title={tile.class_name}
                     classes={{
                     root: classes.titleBar,
                     title: classes.title,
                     }}
                     actionIcon={
                     <IconButton aria-label={`star ${tile.class_name}`}>
                        <StarBorderIcon className={classes.title} />
                     </IconButton>
                     }
                  />
               </GridListTile>
               ))}
            </GridList>
         </div>
      </div>
      
      <div className="Container">
         <div className="Title">
            <h1>Featured</h1>
         </div>
         <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
               {courseData.map((tile) => (
               <GridListTile 
               component={Link}
               to={'/activityinfopage/' + tile.key} 
               edge="start"
               key={tile.image_url}>
                  <img src={tile.image_url} alt={tile.class_name} />
                  <GridListTileBar 
                     title={tile.class_name}
                     classes={{
                     root: classes.titleBar,
                     title: classes.title,
                     }}
                     actionIcon={
                     <IconButton aria-label={`star ${tile.class_name}`}>
                        <StarBorderIcon className={classes.title} />
                     </IconButton>
                     }
                  />
               </GridListTile>
               ))}
            </GridList>
         </div>
      </div>

      <div className="Container">
         <div className="Title">
            <h1>Recommended for you</h1>
         </div>
         <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
               {courseData.map((tile) => (
               <GridListTile 
               component={Link}
               to={'/activityinfopage/' + tile.key} 
               edge="start"
               key={tile.image_url}>
                  <img src={tile.image_url} alt={tile.class_name} />
                  <GridListTileBar 
                     title={tile.class_name}
                     classes={{
                     root: classes.titleBar,
                     title: classes.title,
                     }}
                     actionIcon={
                     <IconButton aria-label={`star ${tile.class_name}`}>
                        <StarBorderIcon className={classes.title} />
                     </IconButton>
                     }
                  />
               </GridListTile>
               ))}
            </GridList>
         </div>
      </div>
      

      
      
     </React.Fragment>
   );
 }

