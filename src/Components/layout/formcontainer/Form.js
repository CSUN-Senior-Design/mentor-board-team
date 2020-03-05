import React, { Component } from "react";
/* Import Component */
import Button from "../formcomponents/Button";
import Input from "../formcomponents/Input";

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
        <fieldset>
          <legend>Billing Information</legend>
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
          <Input
            inputType={"text"}
            title={"Expired Date:"}
            name={"expiredCard"}
            value={this.state.newUser.expiredCard}
            placeholder={" "}
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
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Save"}
            style={buttonStyle}
          />{" "}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />
        </fieldset>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default Form;
