import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Mentorboard"
};

Navbar.propTypes = {
  title: PropTypes.array.isRequired
};

export default Navbar;
