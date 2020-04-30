import React from "react";
import TutorSearchCard from "./TutorSearchCard";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export const TutorsList = (props) => (
   <div>
      {/* all this does is loop thru the prop we selected in App.js */}
      <Grid container spacing={3}>
         {props.tutorCards.map((tutor) => (
            <TutorSearchCard key={tutor.key} tutor={tutor} />
         ))}
      </Grid>
   </div>
);

export default TutorsList;
