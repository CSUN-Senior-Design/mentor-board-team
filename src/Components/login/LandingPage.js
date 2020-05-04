import React, { Fragment, Component } from "react";
import Login from "./Login";

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Login />
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
