import React, { Component } from "react";
import Register from "../../components/auth/register";
import { auth } from "../../utils/firebase";

import "./auth.css";

export default class RegisterPage extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatedPassword: "",
      firstname: "",
      lastname: "",
    };
  }

  render() {
    return (
      <Register
        handleChange={this.changeInput}
        handleSubmit={this.signup}
      ></Register>
    );
  }

  //----validate form
  formIsValid = () => {
    if (
      this.state.firstname == "" ||
      this.state.lastname == "" ||
      this.state.username == "" ||
      this.state.password == "" ||
      this.state.repeatedPassword
    ) {
      alert(" All Fields are required 😋 !!");
      return false;
    }
    else if (this.state.password!=this.state.repeatedPassword){
      alert(" password and password repeated not match 🧐 !!")
      return false;
    }
    else {
      return true;
    }
  };

  //---- signup
  signup = (e) => {
    
    e.preventDefault();

    if(this.formIsValid()==true){
      auth.createUserWithEmailAndPassword(this.state.username,this.state.password)
      .then((response)=>{
          
      }).catch((error)=>{

      })
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
