import React from "react";
import "./search-bar.css";

export const TutorSearchBar = ({ placeholder, handleChange }) => (
   <div>
      <h3>Search for tutors!</h3>
      <input
         className="search"
         type="search"
         placeholder={placeholder}
         onChange={handleChange}
      />
   </div>
);

export default TutorSearchBar;
