import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MathTutorPic from "./MathTutorPic.jpg";

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
      marginTop: 10,
   },
   media: {
      height: 240,
   },
});

export default function MediaCard() {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
               className={classes.media}
               image={MathTutorPic}
               title="Contemplative Reptile"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                  Jaime Escalante
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  Jaime Alfonso Escalante Gutiérrez was a Bolivian-American
                  educator known for teaching students calculus from 1974 to
                  1991 at Garfield High School in East Los Angeles.
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">
               Share
            </Button>
            <Button size="small" color="primary">
               Visit Profile
            </Button>
         </CardActions>
      </Card>
   );
}
