import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        style={inputStyle}
        id={props.name}
        name={props.name}
        type={props.inputTypes}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

const inputStyle = {
  textAlign: "center",
  fontFamily: "inherit",
  width: "84%",
  height: "17px",
  boxShadow: "inset 1px 1px 3px #ccc",
  borderRadius: "5px",
  fontSize: "0.7rem",
  content: "required",
  color: "black",
  padding: "5px 10px",
  margin: "9px 9px 9px 9px"
};

export default Input;
