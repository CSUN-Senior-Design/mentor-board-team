import React, { Component } from "react";
import Header from "./Header";
import RecommendedClasses from "./tutors/RecommendedClasses";
import TutorSearchCard from "./tutors/TutorSearchCard";
import TutorSearchBar from "./tutors/TutorSearchBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TutorsList from "./tutors/TutorsList";

export class Tutors extends Component {
   constructor() {
      super();
      this.state = {
         searchField: "",
         tutorCards: [
            {
               key: "1",
               inst_name: "Jaime Escalante",
               inst_bio:
                  "Jaime Alfonso Escalante Gutiérrez was a Bolivian-American educator known for teaching students calculus from 1974 to 1991 at Garfield High School in East Los Angeles.",
               inst_pic:
                  "https://www.biography.com/.image/t_share/MTE5NDg0MDU0NzE1NzI5NDIz/jaime-escalante-189368-1-402.jpg",
            },
            {
               key: "2",
               inst_name: "Kyle Parker",
               inst_bio:
                  "A stereotypical laid back hippie surfer who tells nonsense stories, such as describing the time he lost a cordless phone, or about how finding a dead bird made him change his normal route to school.",
               inst_pic:
                  "https://vignette.wikia.nocookie.net/nickelodeon/images/f/f6/Totally_Kyle.png/revision/latest/scale-to-width-down/340?cb=20170425151239",
            },
            {
               key: "3",
               inst_name: "Rick Sanchez",
               inst_bio:
                  "A genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty.",
               inst_pic:
                  "https://i.pinimg.com/originals/6e/51/32/6e5132a90812ad1abf3711135a5cf406.png",
            },
            {
               key: "4",
               inst_name: "Walter White",
               inst_bio:
                  "A graduate of the California Institute of Technology (Caltech), Walter co-founded the company Gray Matter Technologies with his close friend Elliott Schwartz and his then-girlfriend Gretchen. He left Gray Matter abruptly, selling his shares for $5,000.",
               inst_pic:
                  "https://metro.co.uk/wp-content/uploads/2017/07/walter-white-breaking-bad.jpg?quality=90&strip=all",
            },
         ],
      };
   }

   handleChange = (e) => {
      console.log("handleChange");
      this.setState({ searchField: e.target.value });
   };

   render() {
      const useStyles = makeStyles((theme) => ({
         root: {
            flexGrow: 1,
         },
         paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
         },
      }));

      const filteredTutors = this.state.tutorCards.filter((tutor) =>
         tutor.inst_name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase())
      );

      return (
         <React.Fragment>
            <Header />
            <RecommendedClasses />

            <TutorSearchBar
               placeholder="Wubba Lubba Dub Dub"
               handleChange={this.handleChange}
            />

            <TutorsList tutorCards={filteredTutors} />
         </React.Fragment>
      );
   }
}

export default Tutors;
