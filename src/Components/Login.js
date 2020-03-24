import React, { Component } from 'react'
import logo from "./Logos/mindhive2.png";
import Button from '@material-ui/core/Button';
import './css/style.css';
import { Checkbox } from 'material-ui';
import IconButton from '@material-ui/core/IconButton'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Login extends Component {
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
                        <div className={'titleForLogin'}>Login to Mentor Board</div>
                        <div className={'inputForLoginID'}>
                            <input className={'inputL'} type={'text'} placeholder={'Please type in User Name'}/>
                        </div>
                        <div className={'inputForLoginPWD'}>
                            <input className={'inputL'} type={'password'} placeholder={'please type in password'}/>
                        </div>
                        <div className={'savedInfo'}>
                            <div className={'savedAccount'}>
                                <input type={'checkbox'} className={'checkbox'} />
                                <label className = {'CheckboxLabel'}>
                                    remember account?
                                    {/* need to put link in here for find password */}
                                </label>
                            </div>
                            <div className={'forgot'}>Forgot password?</div>
                        </div>
                        <div className={'submit'}>
                            <Button style={{maxWidth: '100px', maxHeight: '100px', minWidth: '300px', minHeight: '30px'}} href="home">Login</Button>
                        </div>
                        <div className={'footerBox'}>
                            <div className={'loginLine'}></div>
                            <div className={'textForOr or'}>OR</div>    
                        </div>
                        <div className={'otherChoice'}>
                            will put social media part when i figure out to do it
                            probably need to have api
                            <div className={'google'} />
                            <div className={'facebook'} />
                            <div className={'twitter'} />      
                        </div>                        
                    </div>                  
                </div>
            </div>
        )
    }
}

export default Login