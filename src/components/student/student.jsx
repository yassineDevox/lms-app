
 export default function Student(props) {
   console.log(props)
  return (
    <div className="m-2">
      <div className="d-flex mb-4">
        <img
          className="border border-white p-2 mt-1"
          src={props.data.avatar}
          height={150}
          width={150}
        />
        <div className="d-flex flex-column ">
          <button className="mz-1 btn btn-info m-1">
            <i className="fas fa-eye" />
          </button>
          <button className="mz-1 btn btn-warning m-1">
            <i className="fas fa-edit" />
          </button>
          <button className="mz-1 btn btn-danger m-1">
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
      <p className="text-center text-white fullname"> {props.data.nom} { props.data.pren}</p>
    </div>
  );
}
