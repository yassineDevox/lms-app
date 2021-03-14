import React, { Component } from "react";
import Login from "../../components/auth/login";
import { auth } from "../../utils/firebase";

import "./auth.css";

export default class LoginPage extends Component {

  constructor(){

    super()

    this.state = {
      username:"",
      password:""
    }
  }
  render() {
    return (
      <Login handleChange={this.changeInput} handleSubmit={this.signIn} />
    );
  }

  //----validate form
  formIsValid = () => {
    if (
      this.state.username == "" ||
      this.state.password == ""
    ) {
      alert(" All Fields are required 😋 !!");
      return false;
    }
      return true;
    }
  };

  //---- signin
  signin = (e) => {

    e.preventDefault();

    if (this.formIsValid() == true) {

      auth.signInWithEmailAndPassword(this.state.username,this.state.password)
      .then((response) => {})
      .catch((error) => {});
    }
  };

  //-----handle input
  changeInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
}
