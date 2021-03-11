import ListStudent from "../student/list-student";
import NewStudent from "../student/new-student";

import React from "react";

import "./home.css";
import StudentModel from "../../models/student-model";
import axios from "../../utils/axios";

class Home extends React.Component {
  constructor() {
    // call the constructor of the parent class React.Component
    super();
    //data
    this.state = {
      nom: "",
      pren: "",
      email: "",
      avatar: "",
      list_student_data: [],
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
          {/* <Form handleChange={this.handleChange} /> */}

          <NewStudent
            handleChange={this.handleChange}
            handleSubmit={this.addStudent}
          />

          <ListStudent dataList={this.state.list_student_data} />
        </div>
      </>
    );
  }

  handleChange = (event) => {
    let valueInput = event.target.value;
    let nameInput = event.target.name;
    this.setState({
      [nameInput]: valueInput,
    });
    // console.log(valueInput,nameInput)
  };

  addStudent = (event) => {
    // ne pas acctualiser la page
    event.preventDefault();

    //vider les inputs du formulaire
    event.target.reset();

    // validation du formulaire

    if (
      this.state.nom == "" ||
      this.state.pren == "" ||
      this.state.avatar == "" ||
      this.state.email == ""
    ) {

      alert("Veuillez remplir toutes les champs du formulaire 😑😠");

    } else {

      // creer un objet de type student
      let nStudent = new StudentModel(
        this.state.nom,
        this.state.pren,
        this.state.email,
        this.state.avatar,
        false
      );

      // vider les states 
      this.setState({
        nom:"",
        pren:"",
        email:"",
        avatar:""
      })

      // ajouter student a la liste
      let newStudentList = this.state.list_student_data;
      newStudentList.push(nStudent);
      this.setState({
        list_student_data: newStudentList,
      });

      // ajouter l'etudiant a la partie serveur (firebase) en utilsant axios 
      axios.post("students.json",nStudent)


    }
  };
}

export default Home;
