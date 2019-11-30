import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Courses from './Courses'


var HashMap = require('hashmap');

class SearchBar extends Component{
    
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
        placeHolder: PropTypes.string
     };

     static defaultProps = {
        locked: false,
        focussed: false,
        value: '',
        error: '',
        label: '',
        placeHolder: 'Enter an item to search',
        onChange: () => '',
     };

    constructor(props) {
        super(props);

        this.state = {
                    searchString: '', 
                    data: [],
                    dataMap: new HashMap(),

                    focussed: (props.locked && props.focussed) || false,
                    value: props.value || '',
                    error: props.error || '',
                    label: props.label || '',
                    //Can create contextValues to store the different data types to serve between pages.

                }
  
        this.keyPress = this.keyPress.bind(this);

        //this.state.dataMap.set("Courses", "")
     }

    //Place holder function for performing a query based on the searchString from user input.
    //Populate with database information when db is constructed.
    getData = () => {
        


    }

    onChange = event => {
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange(id, value);
    }
    
    keyPress(e){
        if(e.keyCode === 13){
            this.setState({ searchString: e.target.value });
            console.log('search input:  ', e.target.value);
            this.getData()
        }
    }

    render(){
        const { focussed, value, error, label } = this.state;
        const { id, type, locked } = this.props;

        const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;

        return(
            <TextField 
                className={fieldClassName}
                id={id}
                value={this.state.value}
                label={this.props.label}
                placeholder={this.props.placeHolder}

                InputLabelProps={{
                    style: { color: "yellow" },
                    }}

                onChange={this.onChange}
                onKeyDown={this.keyPress}

                onFocus={() => !locked && this.setState({ focussed: true })}
                onBlur={() => !locked && this.setState({ focussed: false })}
                >
                <label htmlFor={id} className={error && 'error'}>
                    {error || label}
                </label>

            </TextField>
        )
    }
}

export default SearchBar