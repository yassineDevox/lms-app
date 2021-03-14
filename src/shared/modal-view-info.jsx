import React from "react";

export default function ModalViewInfo(props) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              More Details de{" "}
              <span className="badge bg-warning text-dark">
                {props.studentInfos.nom}
              </span>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times-circle text-danger"></i>
              </span>
            </button>
          </div>
          <div className="modal-body ">
            <div className="card flex-row">
              <img
                className="card-img-top"
                src={props.studentInfos.avatar}
                style={{ width: "13rem" }}
              />
              <div className="card-body">
                <span className="badge bg-success text-white m-1">Nom : </span>
                <br /> <span className="m-1">
                  {props.studentInfos.nom}
                </span>{" "}
                <br />
                <span className="badge bg-info text-white m-1">
                  Prenom :{" "}
                </span>{" "}
                <br />
                <span className="m-1">{props.studentInfos.pren}</span> <br />
                <span className="badge bg-warning text-dark m-1">Email : </span>
                <br />
                <span className="m-1">{props.studentInfos.email}</span> <br />
              </div>
            </div>
            <div className="modal-footer pb-0">
              <button type="button" className="btn btn-success">
                PRESENT <i className="fas fa-smile-beam"></i>
              </button>
              <button type="button" className="btn btn-danger">
                ABSENT <i className="fas fa-skull-crossbones"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
