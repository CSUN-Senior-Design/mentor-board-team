import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tutors from "../Tutors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TutorSearchCard = (props) => {
   const { inst_name, inst_bio, inst_pic } = props.tutor;

   return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
         <Paper>
            <Card style={{ maxWidth: 345, marginTop: 10 }}>
               <CardActionArea>
                  <CardMedia
                     style={{ height: 240 }}
                     image={inst_pic}
                     title="Contemplative Reptile"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                        {inst_name}
                     </Typography>
                     <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                     >
                        {inst_bio}
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
         </Paper>
      </Grid>
   );
};

export default TutorSearchCard;
