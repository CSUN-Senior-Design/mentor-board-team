import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export class ToggleSwitch extends Component {
    render(){

        return(
             <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                    control={<Switch onChange={this.props.mark.bind(this,this.props.id)}/>}
                    />
                 </FormGroup>
            </FormControl>
        )
    }
}
export default ToggleSwitch