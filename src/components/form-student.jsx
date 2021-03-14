import React from "react";

export default function FormStudent(props) {
  return (
    <div className="col-4 border p-5">
      <h1 style={{ fontSize: "23px" }} className="title text-warning ">
        {" "}
        Form Student
      </h1>

      <div className="text-center pt-2">
        {" "}
        <img
          src={props.avatar || "https://i.stack.imgur.com/l60Hf.png"}
          alt=""
          className="rounded-circle"
          height="80"
          width="80"
        />
      </div>
      <form
        onSubmit={
          props.action == "ADD" ? props.handleAddSubmit : props.handleEditSubmit
        }
        autoComplete="off"
      >
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            value={props.nom}
            onChange={props.handleChange}
            name="nom"
            placeholder="Firstname"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            value={props.pren}
            onChange={props.handleChange}
            placeholder="Lastname"
            type="text"
            className="form-control"
            name="pren"
          />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            placeholder="Email address"
            type="email"
            value={props.email}
            onChange={props.handleChange}
            className="form-control"
            name="email"
          />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            placeholder="Url Avatar"
            type="text"
            className="form-control"
            value={props.avatar}
            onChange={props.handleChange}
            name="avatar"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning">
            <i className={props.iconBtn} /> {props.textBtn}
          </button>
          
        </div>
      </form>
      <button
            onClick={props.handleCancelEditFromHome}
            className={props.action == "EDIT" ? "btn btn-danger cancel-btn" : "d-none"}
          >
            <i className="fas fa-times-circle"></i>

          </button>
    </div>
  );
}
