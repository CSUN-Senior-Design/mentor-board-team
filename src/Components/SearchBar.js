import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

class SearchBar extends Component{

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func,
        placeHolder: PropTypes.string
     };

     static defaultProps = {
        value: '',
        placeHolder: 'Enter an item to search',
        onChange: () => '',
     };

    constructor(props) {
        super(props);

        this.state = {
                    query: '', 
                    data: [],
                    

                    value: props.value || ''
                    //Can create contextValues to store the different data types to serve between pages.

                }
        this.onChange = this.onChange.bind(this);
        //this.keyPress = this.keyPress.bind(this);

     }


    searchData = async searchText => {
        const res = await fetch('')
            .then(res => res.json())
            .then(json => console.log(json));
        //const data = await res.json();
        //console.log('res: '+ res);
    
        let matches = res.filter(item => {
            const regex = new RegExp(`^${searchText}`, 'gi');
            return item.name.match(regex);
        });
    }


    onChange = event => {

        //User input sanitation to prevent invalid input and other dangerous db operations.
        if (this.state.query.length >= 0 && this.state.query.length < 20) 
            this.setState({query: event.target.value})
    }

    componentDidMount() {
        fetch('../Data/DummyCourseData.json')
            .then(response => {
                return response.json();
            })
            .then((data_p) => {
                this.setState({
                    data: data_p.map(item => ({
                        id: item.id,
                        name: item.name,
                        instructorName: item.instructor_name
                    }))
                })
                console.log(data_p)
            })
    }

    render(){



        return(
            <div className="searchBar">
                <TextField 
                    id={this.id}
                    value={this.state.query}
                    placeholder={this.props.placeHolder}
                    onChange={this.onChange}
                    onKeyDown={this.keyPress}

                    InputProps={{
                        disableUnderline: true
                    }}
                >
                </TextField>

            </div>
        )
    }
}

export default SearchBar