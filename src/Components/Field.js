import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Field = (props) => (
    <div>
        <label>{props.label}</label>
        <input type = {props.textarea ? 'textarea' : 'text'} 
            onChange = {props.onChange} 
            value = {props.value}
        />
    </div>
);

Field.propType = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired,
};

Field.defaultProps = {
    textarea: false,
};

export default Field;