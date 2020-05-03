import React, { Component } from 'react'
import logo from "./Logos/mindhive2.png";
import Button from '@material-ui/core/Button';
import './css/profile.css';
import { Checkbox } from 'material-ui';
import IconButton from '@material-ui/core/IconButton'
import Bio from "./Bio";
import Profile from "./Profile";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ProfileSetting extends Component {

    render() {
        return (
            <div className={'mainBoxProfile'}>
                <div className={'leftPart'}>
                    <div className="pic_bio">
                        <Profile />
                        <Bio />
                    </div>
                </div>
                <div className={'rightPart'}>
                    <div className={'boxProfile'}>
                        <div className={'titleForLogin'}>Personal Setting</div>
                        <div className={'inputNickName'}>
                            <input className={'inputN'} type={'text'} placeholder={'Change User Name'}/>
                            <button className={'button_place'}>Change</button>
                        </div>
                        <div className={'inputForLoginPWD'}>
                            <input className={'inputS'} type={'password'} placeholder={'please type in current password'}/>
                        </div>
                        <div className={'checkPassword'}></div>
                        <div className={'inputForLoginPWD'}>
                            <input className={'inputS1'} type={'password'} placeholder={'please type in new password'}/>
                        </div>
                        <div className={'inputForLoginPWD'}>
                            <input className={'inputS2'} type={'password'} placeholder={'please confirm password'}/>
                        </div>
                        <div className={'confirmNewPassword'}></div>
                        <div className={'inputEmail'}>
                            <input className={'inputM'} type={'email'} placeholder={'Change Email'}/>
                            <button className={'button_place'}>Vertify</button>
                        </div>
                        <div className={'submit_change'}>
                            <Button style={{maxWidth: '100px', maxHeight: '100px', minWidth: '300px', minHeight: '30px'}} href="home">Change Setting</Button>
                        </div>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default ProfileSetting