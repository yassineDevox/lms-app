import ListStudent from "../student/list-student";
import NewStudent from "../student/new-student";
import StudentModel from "../../models/student-model";

import React from "react";

import "./home.css";

class Home extends React.Component {
  constructor() {
    // call the constructor of the parent class React.Component
    super();
    //data
    this.state = {
      list_student_data : [
        new StudentModel("nom1","pren1","nom1@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
        new StudentModel("nom2","pren2","nom2@gmail.com","https://i.imgur.com/1o1zEDM.png",false),
        new StudentModel("nom3","pren3","nom3@gmail.com","https://i.imgur.com/1o1zEDM.png",true)
      ] 
    };
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1 className="text-center text-white mt-5">
          🧑‍🎓 LMS-APP : <span className="text-warning">Home</span> 🏠
        </h1>
        <div className="container-fluid d-flex p-4">
          {/* new student component */}
          <NewStudent />
          {/* list of student  */}
          <ListStudent dataList={this.state.list_student_data} />
        </div>
      </>
    );
  }
}

export default Home;
