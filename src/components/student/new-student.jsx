import React from "react";

export default function NewStudent(props) {
  return (
    <div className="col-4 border p-5">
      <h3 className="text-warning text-center text-capitalize">
        New Student 
      </h3>
      <div className="avatar border mx-auto mt-4 " />
      <form onSubmit={props.handleSubmit}>
        <div className="mb-4 mt-4 w-75 mx-auto">
          <input
            onChange={props.handleChange}
            name="nom"
            placeholder="Firstname"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-4 mt-4 w-75 mx-auto">
          <input
            onChange={props.handleChange}
            name="pren"
            placeholder="Lastname"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-4 mt-4 w-75 mx-auto">
          <input
            onChange={props.handleChange}
            name="email"
            placeholder="Email address"
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-4 mt-4 w-75 mx-auto">
          <input
            onChange={props.handleChange}
            name="avatar"
            placeholder="Url Avatar"
            type="text"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning">
            Add <i className="fas fa-plus-circle" />
          </button>
        </div>
      </form>
      <p className="text-center text-danger mt-3 fw-bold">{props.msg}</p>
    </div>
  );
}
