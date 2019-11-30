import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ListSubheader from '@material-ui/core/ListSubheader';
import Courses from './Courses';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const CourseItem = props => {
      const {key, image_url,class_name,class_type,class_time} = props.course;
      const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          
        },
        paper: {
          padding: theme.spacing(2),
          margin: 'auto',
          maxWidth: 500,
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          alignItems: 'flex-start',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white', 
          height: 'auto',
          // padding: 'auto',

        },
        image: {
          width: 128,
          height: 128,
        },
        img: {
          margin: 'auto',
          display: 'block',
          maxWidth: '100%',
          maxHeight: '100%',
        },
      }));
      const style = useStyles();

        return (
          <div className={style.root}>
          <Paper className={style.paper}>
            <Grid container  spacing={2}>
              <Grid item >
                <ButtonBase className={style.image}>
                  <img className={style.img} alt="complex" src={image_url} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container direction="column"  >
                <Grid item xs container direction="row" spacing={2}  >
                  <Grid item xs >
                    <Typography gutterBottom variant="subtitle1">
                     <b> {class_name}</b>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {class_type}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {key}
                    </Typography>
                  </Grid>
                </Grid>
                  <Grid item >
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      More
                    </Typography>
                  </Grid>
                <Grid item>
                  <Typography variant="subtitle1"></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>


        )
    }



export default CourseItem
