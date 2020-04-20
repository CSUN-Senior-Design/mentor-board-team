import React, { Component } from "react";
import Header from "./Header";
import RecommendedClasses from "./tutors/RecommendedClasses";
import TutorSearchCard from "./tutors/TutorSearchCard";
import TutorSearchBar from "./tutors/TutorSearchBar";

export class Tutors extends Component {
   render() {
      return (
         <React.Fragment>
            <div>
               <Header />
               <RecommendedClasses />
               <TutorSearchBar />
               <TutorSearchCard />
            </div>
            <div></div>
         </React.Fragment>
      );
   }
}

export default Tutors;
