import React from "react";

export default function NewStudent() {
  return (
    <div className="col-4 border p-5">
      <div className="avatar border mx-auto mt-5 " />
      <form>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input placeholder="Firstname" type="text" className="form-control" />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input placeholder="Lastname" type="text" className="form-control" />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            placeholder="Email address"
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-4 mt-4 w-70 mx-auto">
          <input
            placeholder="Url Avatar"
            type="text"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning">
            Add Student <i className="fas fa-plus-circle" />
          </button>
        </div>
      </form>
    </div>
  );
}
