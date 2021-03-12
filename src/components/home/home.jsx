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
      action: "ADD_STUDENT",
      updatedStudent_id: -1,
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
            handleAddSubmit={this.addStudent}
            handleEditSubmit={this.editStudent}
            nom={this.state.nom}
            pren={this.state.pren}
            email={this.state.email}
            avatar={this.state.avatar}
            action={this.state.action}
          />

          <ListStudent
            dataList={this.state.list_student_data}
            handleDeleteFromHome={this.deleteStudent}
            handleUpdateStudent={this.updateStudent}
          />
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
        0,
        this.state.nom,
        this.state.pren,
        this.state.email,
        this.state.avatar,
        false
      );

      // vider les states
      this.setState({
        nom: "",
        pren: "",
        email: "",
        avatar: "",
      });

      // ajouter student a la liste
      let newStudentList = this.state.list_student_data;

      newStudentList.push(nStudent);
      this.setState({
        list_student_data: newStudentList,
      });

      // ajouter l'etudiant a la partie serveur (firebase) en utilsant axios

      const data_student = {
        nom: nStudent.nom,
        pren: nStudent.pren,
        email: nStudent.email,
        avatar: nStudent.avatar,
        isPresent: nStudent.isPresent,
      };
      axios.post("students.json", data_student).then((response) => {
        let id_new_student = response.data.name;

        // chercher l'etudiant qui a l'id == 0 sur la liste
        let newListStudent = this.state.list_student_data;
        newListStudent.forEach((s) => {
          if (s.id == 0) s.id = id_new_student;
        });
        // modifier la liste sur le state
        this.setState({ list_student_data: newListStudent });
      });
    }
  };

  // recuperer la liste des etudiants depuis firebase onload page avec firebase
  componentDidMount() {
    axios.get("students.json").then((response) => {
      if (response.data != null) {
        //extraire toutes les clé de l'objet data
        let keys = Object.keys(response.data);

        //parcourir les keys
        let listEtudiant = keys.map((k) => {
          let ns = new StudentModel(
            k,
            response.data[k].nom,
            response.data[k].pren,
            response.data[k].email,
            response.data[k].avatar,
            response.data[k].isPresent
          );
          return ns;
        });

        //ajouter la liste
        this.setState({ list_student_data: listEtudiant });
      }
    });
  }

  //----- handle delete
  deleteStudent = (idStudent) => {
    let choice = window.confirm("Are you sure ?");

    if (choice == true) {
      //supprimer un etudiant depuis firebase
      axios.delete("students/" + idStudent + ".json").then(() => {
        let newList = this.state.list_student_data.filter(
          (s) => s.id != idStudent
        );

        this.setState({ list_student_data: newList });
      });
    }
  };
  //------- handle update
  updateStudent = (updatedStudent) => {
    //--- ajouter les infos au formulaire  cad au donnees du state
    this.setState({
      nom: updatedStudent.nom,
      pren: updatedStudent.pren,
      email: updatedStudent.email,
      avatar: updatedStudent.avatar,
    });

    //----- changer le text du button (Edit Student)
    this.setState({
      action: "EDIT_STUDENT",
    });

    //------- sauvgarder l'id de l'etudiant
    this.setState({
      idStudentUpdated: updatedStudent.id,
    });

    console.log(updatedStudent);
  };

  //----- on edit student submit
  editStudent = (event) => {
    //------ ne pas acctuliser la page
    event.preventDefault();

    //----- modifier l'etudiant depuis firebase
    const data_updated_student = {
      nom: this.state.nom,
      pren: this.state.pren,
      email: this.state.email,
      avatar: this.state.avatar,
    };
    //-------- 

    axios
      .put(
        "students/" + this.state.updatedStudent_id + ".json",
        data_updated_student
      )
      .then((response) => {
        //modifier l'objet student sur la liste sans actualiser la page
        let newList = this.state.list_student_data;
        newList.forEach((s) => {
          if (s.id == this.state.updatedStudent_id) {
            s.nom = this.state.nom;
            s.pren = this.state.pren;
            s.email = this.state.email;
            s.avatar = this.state.avatar;
          }

          this.setState({ list_student_data: newList });
        });

        console.log(response);
      });
  };
}

export default Home;
