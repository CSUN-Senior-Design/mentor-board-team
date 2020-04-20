import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import GuitarPic from "./guitar.jpeg";
import SwimPic from "./swim.jpg";
import MathPic from "./math.jpg";
import PianoPic from "./piano.jpeg";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
   },
   gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
   },
   title: {
      color: theme.palette.primary.light,
   },
   titleBar: {
      background:
         "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
   },
}));

const tileData = [
   { img: GuitarPic, title: "Guitar Class", Author: "Guitar Man" },
   { img: SwimPic, title: "Swim Class", Author: "Michael Phelps" },
   { img: MathPic, title: "Math Class", Author: "Mr Escalante" },
   { img: PianoPic, title: "Piano Class", Author: "Handy Dandy" },
];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function SingleLineGridList() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <h1>You might be interested in...</h1>
         <GridList className={classes.gridList} cols={2.5}>
            {tileData.map((tile) => (
               <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                     title={tile.title}
                     classes={{
                        root: classes.titleBar,
                        title: classes.title,
                     }}
                  />
               </GridListTile>
            ))}
         </GridList>
      </div>
   );
}
