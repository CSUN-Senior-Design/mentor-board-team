import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label for={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
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

export default Input;
