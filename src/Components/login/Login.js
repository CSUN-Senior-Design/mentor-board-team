import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../css/style.css";
import { blue400 } from "material-ui/styles/colors";
import { blue800 } from "material-ui/styles/colors";

export class Login extends Component {
  render() {
    return (
      <div className={"mainBox"}>
        <div className={"leftBox"}>
          <div className={"backgroundColorLeft"} />
          <div className={"backgroundImageLeft"} />
          <div className={"textForImage bold style1"}>Mentor Board</div>
          <div className={"textForImage style2"}>
            Find perfect tutor for you!
          </div>
        </div>
        <div className={"rightBox"}>
          <div className={"cancel"}>
            <Button>X</Button>
          </div>
          <div className={"box"}>
            <div className={"titleForLogin"}>Login to Mentor Board</div>
            <div className={"inputForLoginID"}>
              <input
                className={"inputL"}
                type={"text"}
                placeholder={"Please type in User Name"}
              />
            </div>
            <div className={"inputForLoginPWD"}>
              <input
                className={"inputL"}
                type={"password"}
                placeholder={"please type in password"}
              />
            </div>
            <div className={"savedInfo"}>
              <div className={"savedAccount"}>
                <input type={"checkbox"} className={"checkbox"} />
                <label className={"CheckboxLabel"}>
                  remember account?
                  {/* need to put link in here for find password */}
                </label>
              </div>
              <div className={"forgot"}>Forgot password?</div>
            </div>
            <div className={"submit"}>
              <Button
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "300px",
                  minHeight: "30px",
                }}
                href="home"
              >
                Login
              </Button>
            </div>
            <div className={"footerBox"}>
              <div className={"loginLine"}></div>
              <div className={"textForOr or"}>OR</div>
            </div>
            <div className={"otherChoice"}>
              <div className={"google"} />
              <FacebookIcon fontSize="large" style={{ color: blue800 }} />
              <TwitterIcon fontSize="large" style={{ color: blue400 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
