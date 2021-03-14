import React from "react";

//----- importation des composants
import FormStudent from "../../components/student/form-student";
import ListStudent from "./../../components/student/list-student";
import StudentModel from "./../../models/student-model";
import ModalViewInfo from "./../../shared/modal-view-info";

//--- import axios for ajax functions
import axios from "./../../utils/axios";

//--- import css
import "./admin-page.css";


class AdminPage extends React.Component {
  constructor() {
    // call the constructor of the parent class React.Component
    super();
    //data  
    this.state = {
      studentInfosState:{},
      nom: "",
      pren: "",
      email: "",
      avatar: "",
      updatedStudent_id: -1,
      list_student_data: [],
      backupForFilterList : [],
      textBtnState: "Add",
      iconBtnState: "fas fa-plus-circle",
      action: "ADD",
    };
  }

  render() {
    return (
      <>
        <h1 className="title mt-5">
           <span className="text-warning"> Manage Students</span>
        </h1>
        <div className="container-fluid d-flex p-4">

          <FormStudent
            textBtn={this.state.textBtnState}
            iconBtn={this.state.iconBtnState}
            avatar={this.state.avatar}
            nom={this.state.nom}
            pren={this.state.pren}
            email={this.state.email}
            action={this.state.action}
            handleChange={this.handleChange}
            handleAddSubmit={this.addStudent}
            handleEditSubmit={this.submitEditStudent}
            handleCancelEditFromHome={this.handleCancelEdit}
          />

          <ListStudent
            dataList={this.state.list_student_data}
            handleDeleteFromHome={this.deleteStudent}
            handleEditFromHome={this.editStudent}
            handleFilterFromHome={this.filterStudentsByName}
            handleViewMoreInfoFromHome = {this.viewMoreInfoStudent}
          />
        </div>

        {/* My Modal for view more student infos */}
        <ModalViewInfo 
            studentInfos={this.state.studentInfosState}
        />
      </>
    );
  }
  //------- handleCancelEdit
  handleCancelEdit = () => {
         
      //vider les variables state
      this.setState({
        nom: "",
        pren: "",
        email: "",
        avatar: "",
        updatedStudent_id: -1,
        textBtnState: "Add ",
        iconBtnState: "fas fa-plus-circle",
        action: "ADD",
      });
  }

  //------ view more info of the student 
  viewMoreInfoStudent = (studentInfos) =>{

    //------ ajouter les infos au state
    this.setState({
      studentInfosState:studentInfos,
      updatedStudent_id:studentInfos.id
    })

    //------ passer toute les state vers le composant modal 

  }

  //------- filter students by name
  filterStudentsByName = (event) => {

    // changer le format en minuscule
    let query = event.target.value.toLowerCase();
    // changer la liste 
    if(query=="")
    {
      this.setState({list_student_data:this.state.backupForFilterList})
    }
    else {

      let newList = this.state.list_student_data.filter((s) =>
        s.nom.toLowerCase().includes(query) ||
        s.pren.toLowerCase().includes(query)
      );
      
      this.setState({list_student_data:newList})
    }
    
    console.log(event.target.value);
  };

  //------- si l'utilisateur tape qlq chose dans les input tu le met dans les variables state (nom,pren ...)
  handleChange = (event) => {
    let valueInput = event.target.value;
    let nameInput = event.target.name;
    this.setState({
      [nameInput]: valueInput,
    });
    // console.log(valueInput,nameInput)
  };

  //------- si l'utilisateur click sur add pour ajouter l'etudiant sur firebase
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

  //------recuperer la liste des etudiants depuis firebase onload page avec firebase
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
        this.setState({ list_student_data : listEtudiant });
        // ajouter un backup 
        this.setState({ backupForFilterList : listEtudiant });
      }
    });
  }

  //----- handle delete pour supprimer un etudiant par id 
  deleteStudent = (idStudent) => {
    let choice = window.confirm("Are you sure ?");

    if (choice == true) {
      //supprimer un etudiant depuis firebase
      axios.delete("students/" + idStudent + ".json").then(() => {
        let newList = this.state.list_student_data.filter(
          (s) => s.id != idStudent
        );

        this.setState({ list_student_data: newList });
        //changer le backup aussi 
        this.setState({ backupForFilterList: newList });
      });
    }
  };

  //----editStudent lorsqu'on click sur btn update icon (student)
  editStudent = (updatedStudent) => {

    //changer le text du button newStudent
    this.setState({ textBtnState: "Edit" });

    //changer l'icon du button newStudent
    this.setState({ iconBtnState: "fas fa-edit" });

    // ajouter les information au state
    this.setState({
      nom: updatedStudent.nom,
      pren: updatedStudent.pren,
      email: updatedStudent.email,
      avatar: updatedStudent.avatar,
      updatedStudent_id: updatedStudent.id,
    });

    // changer l'action du state
    this.setState({ action: "EDIT" });

    console.log(updatedStudent);
  };

  //------- submitEditStudent la fonction qui va changer l'etudiant depuis firebase
  submitEditStudent = (event) => {
    // ne pas acctualiser la page
    event.preventDefault();

    //partie data a envoyer a firebase
    const student_data = {
      nom: this.state.nom,
      pren: this.state.pren,
      email: this.state.email,
      avatar: this.state.avatar,
    };

    // appel a la fonction put de axios
    axios
      .put("students/" + this.state.updatedStudent_id + ".json", student_data)
      .then((response) => {
        //changer l'etudiant dans la liste
        let newList = this.state.list_student_data;
        newList.forEach((s) => {
          if (s.id == this.state.updatedStudent_id) {
            s.nom = response.data.nom;
            s.pren = response.data.pren;
            s.email = response.data.email;
            s.avatar = response.data.avatar;
          }
        });

        // modifier la liste du state
        this.setState({ list_student_data: newList });
        // modifier la liste backup aussi
        this.setState({ backupForFilterList: newList });

        // vider le formulaire
        event.target.reset();

        //vider les variables state
        this.setState({
          nom: "",
          pren: "",
          email: "",
          avatar: "",
          updatedStudent_id: -1,
          textBtnState: "Add ",
          iconBtnState: "fas fa-plus-circle",
          action: "ADD",
        });
      });
  };
}

export default AdminPage;
