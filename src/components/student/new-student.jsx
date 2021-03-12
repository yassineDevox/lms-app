import React from "react";

export default function NewStudent(props) {
  return (
    <div className="col-4 border p-5">
      <div
        className="avatar border mx-auto mt-5 "
        style={{
          backgroundImage: `url(${
            props.avatar || "https://i.stack.imgur.com/l60Hf.png"
          })`,
          backgroundSize: "cover"
        }}
      />
      <form
        onSubmit={
          props.action == "ADD_STUDENT"
            ? props.handleAddSubmit
            : props.handleEditSubmit
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
          {props.action == "ADD_STUDENT" ? (
            <button type="submit" className="btn btn-warning">
              {" "}
              <i className="fas fa-plus-circle" /> Add Stuednt
            </button>
          ) : (
            <button type="submit" className="btn btn-warning">
              {" "}
              <i className="fas fa-edit" /> Edit Student
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
