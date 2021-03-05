import ListStudent from "../../components/student/list-student";
import NewStudent from "../../components/student/new-student";
import StudentModel from "../../models/student-model";

import React from "react";

import "./admin.css";

class AdminPage extends React.Component {
  constructor() {
    // call the constructor of the parent class React.Component
    super();
    //data
    this.state = {
      new_student: {},
      list_student_data: [
        new StudentModel(
          "nom1",
          "pren1",
          "nom1@gmail.com",
          "https://i.imgur.com/1o1zEDM.png",
          true
        ),
        new StudentModel(
          "nom2",
          "pren2",
          "nom2@gmail.com",
          "https://i.imgur.com/1o1zEDM.png",
          false
        ),
        new StudentModel(
          "nom3",
          "pren3",
          "nom3@gmail.com",
          "https://i.imgur.com/1o1zEDM.png",
          true
        ),
      ],
    };
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1 className="text-center text-white mt-3">
          Page : <span className="text-warning">Admin</span>
        </h1>
        <div className="container-fluid d-flex p-4">
          {/* new student component */}
          <NewStudent
            data={this.state.new_student}
            handleChange={this.input}
            handleSubmit={this.addStudent}
          />
          {/* list of student  */}
          <ListStudent dataList={this.state.list_student_data} />
        </div>
      </>
    );
  }

  //---- utils functions

  //on text change on inputs
  input = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //on add student
  addStudent = (event) => {
    event.preventDefault();

    if (this.formIsNotVaid()==true)  alert(" Fields couldnt be empty 🙄")
    else {
      this.setState((currentState) => {
        currentState.list_student_data.push(currentState.new_student);
        return currentState;
      });
      alert(" Student Added Successfully 😇 !!")
    }
  };

  //validate form
  formIsNotValid = () => {
    Object.keys(this.state.new_student).forEach((property) => {
      if (this.state[property] == "") return true;
    });

    return false;
  };
}

export default AdminPage;
