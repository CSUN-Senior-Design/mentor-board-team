import React, { Component } from "react";
/* Import Component */
import Button from "../formcomponents/Button";
import Input from "../formcomponents/Input";
import Select from "../formcomponents/Select";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        creditCard: "",
        expiredCard: "",
        ccvCard: ""
      }
    };
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        creditCard: "",
        expiredCard: "",
        ccvCard: ""
      }
    });
  }
  render() {
    return (
      <div>
        <div style={formBody}>
          <fieldset style={fieldStyle}>
            <legend style={legendStyle}>Payment Information</legend>
            <section
              className="SettingsContainer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <Input
                  inputType={"text"}
                  title={"Full Name:"}
                  name={"name"}
                  value={this.state.newUser.name}
                  placeholder={"Enter your name from Debit or Credit Card"}
                  handleChange={this.handleInput}
                />
                <Input
                  inputType={"text"}
                  title={"Credit Card Number:"}
                  name={"creditCard"}
                  value={this.state.newUser.creditCard}
                  placeholder={"XXXX XXXX XXXX XXXX"}
                  handleChange={this.handleInput}
                />
                <Select
                  inputType={"text"}
                  title={"Expired Date:"}
                  name={"expiredCard"}
                  value={this.state.newUser.expiredCard}
                  handleChange={this.handleInput}
                />
                <Input
                  inputType={"text"}
                  title={"CCV:"}
                  name={"ccvCard"}
                  value={this.state.newUser.ccvCard}
                  placeholder={" "}
                  handleChange={this.handleInput}
                />
              </div>
            </section>
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"SAVE"}
              style={buttonStyle}
            />{" "}
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"CLEAR"}
              style={buttonStyle}
            />
          </fieldset>
        </div>
        <div style={formBody}>
          <fieldset style={fieldStyle}>
            <legend style={legendStyle}>Payment History</legend>
            <section
              className="SettingsContainer"
              style={{ display: "flex", justifyContent: "center" }}
            ></section>
          </fieldset>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  color: "white",
  background: "#3434A1",
  fontFamily: "inherit",
  fontSize: "84%",
  boxSizing: "border-box",
  margin: "10px 10px 10px 10px",
  padding: "5px",
  width: "42%",
  height: "30px"
};

const fieldStyle = {
  padding: "10px 30px 0"
};

const formBody = {
  fontFamily: "sans-serif",
  margin: "20px auto",
  maxWidth: "800px",
  padding: "10px"
};

const legendStyle = {
  display: "block",
  color: "white",
  background: "black",
  padding: "5px 10px",
  border: "none"
};

export default Form;
