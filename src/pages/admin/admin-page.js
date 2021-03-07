import ListStudent from "../../components/student/list-student";
import NewStudent from "../../components/student/new-student";
import StudentModel from "../../models/student-model";
import React from "react";
import "./admin.css";
import Header from "../../components/header/header";

class AdminPage extends React.Component {

  constructor() {
    // call the constructor of the parent class React.Component
    super();
    //data
    this.state = {

      formIsValid: true,

      new_student: new StudentModel(),

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
          "https://i.imgur.com/1o1zEDM.png"
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
  }

  render() {
    return (
      <>

        <Header />
        <div className="container-fluid d-flex p-4">
          {/* new student component */}
          <NewStudent
            data={this.state.new_student}
            handleChange={this.input}
            handleSubmit={this.addStudent}
            msg={this.state.formIsValid ? "" : "Something Goes Wrong here 🙄"}
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
    let propertyName = event.target.name;
    let valueInput = event.target.value;

    this.setState((currentState) => {
      currentState.new_student[propertyName] = valueInput;
      return currentState;
    });
  };

  //on add student
  addStudent = (event) => {

    event.preventDefault();

    if (this.formIsNotValid() == true) {
      
      this.setState({ formIsValid: false });
      alert(" Fields couldnt be empty 🙄");

    } else {

      let newList = this.state.list_student_data;
      newList.push(this.state.new_student);
      this.setState({ list_student_data: newList });
      alert(" Student Added Successfully 😇 !!");
    }
  };

  //validate form
  formIsNotValid = () => {
    if (
      this.state.new_student.avatar == "" ||
      this.state.new_student.pren == "" ||
      this.state.new_student.nom == "" ||
      this.state.new_student.email == "" 
    ) {
      return true;
    }
    return false;
  };
}

export default AdminPage;
