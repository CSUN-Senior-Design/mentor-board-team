import React from "react";

const Select = props => {
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <select style={selectStyle}>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
      <select style={selectStyle}>
        <option>2020</option>
      </select>
    </div>
  );
};

const selectStyle = {
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  textAlign: "center",
  width: "28%",
  height: "20px",
  fontSize: "0.8rem",
  color: "black",
  margin: "9px 9px 9px 9px"
};

export default Select;
