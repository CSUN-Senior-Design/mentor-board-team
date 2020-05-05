import React, { Component } from 'react'
import logo from "./images/mindhive2.png";
import Button from '@material-ui/core/Button';
import '../css/style.css';
import { Checkbox } from 'material-ui';
import IconButton from '@material-ui/core/IconButton'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SignUp extends Component {
    render() {
        return (
            <div className={'mainBox'}>
                <div className={'leftBox'}>
                    <div className={'backgroundColorLeft'}/>
                    <div className={'backgroundImageLeft'}/>
                    <div className={'textForImage bold style1'}>Mentor Board</div>
                    <div className={'textForImage style2'}>Find perfect tutor for you!</div>
                </div>
                <div className={'rightBox'}>
                    <div className={'cancel'}>
                            <Button>X</Button>
                    </div>
                    <div className={'box'}>
                        <div className={'titleForLogin'}>Sign Up for Mentor Board</div>
                        <div className={'inputForLoginID'}>
                            <input className={'inputL'} type={'text'} placeholder={'Full Name'}/>
                        </div>
                        <div className={'inputForLoginID'}>
                            <input className={'inputL'} type={'text'} placeholder={'Email'}/>
                        </div>
                        <div className={'inputForLoginPWD'}>
                            <input className={'inputL'} type={'password'} placeholder={'Password'}/>
                        </div>
                        <div className={'submit'}>
                            <Button style={{maxWidth: '100px', maxHeight: '100px', minWidth: '300px', minHeight: '30px'}} href="home">Join For Free</Button>
                        </div>
                        <div className = "space"></div>                      
                    </div>                  
                </div>
            </div>
        )
    }
}

export default SignUp