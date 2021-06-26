
export default function ModalShared(props) {

    return (
        <div
          className="modal fade"
          id="moreInfo"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  More details of <span className="badge bg-warning text-dark">{props.moreInfo.nom} </span>{" "}
                  {
                      props.moreInfo.isPresent == true ? 
                        <span className="badge bg-success text-white"> Present 😁</span> 
                        : 
                        <span className="badge bg-danger text-white"> Absent 😢</span> 
                  }
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{border:"none",backgroundColor:"white",zoom:"1.3",opacity:".7"}}
                >
                  <span aria-hidden="true">
                <i className="fas fa-times-circle text-danger"></i>
              </span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-around">
                <img
                  src={props.moreInfo.avatar}
                  height="150"
                  width="150"
                  alt=""
                />
                <ul className=" list-group">
                  <li className="list-group-item">
                    <span className="badge bg-primary text-white"> nom : </span>{" "}
                    {props.moreInfo.nom}
                  </li>
                  <li className="list-group-item">
                    <span className="badge bg-success text-white">
                     
                      pren :
                    </span>{" "}
                    {props.moreInfo.pren}
                  </li>
                  <li className="list-group-item">
                    <span className="badge bg-warning text-dark">
                      
                      email :
                    </span>{" "}
                    {props.moreInfo.email}
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={props.moreInfo.isPresent==false ? "btn btn-success" : "d-none"} 
                  data-dismiss="modal" 
                  onClick={props.handleSetPresence}  

                >
                  Present <i className="fas fa-edit"></i>
                </button>
                  <button 
                    type="button"
                    data-dismiss="modal"
                    className={props.moreInfo.isPresent==true ? "btn btn-danger" : "d-none" } 
                    onClick={props.handleSetPresence}  
                  >
                  Absent <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
