import React from "react";
import Student from "./student";

export default function ListStudent(props) {

  return (
    <div className="h-80 col-8 border p-5 overflow-scroll ">
      <h3 className="text-warning text-center text-capitalize">
        my classroom 🏛️
      </h3>
      <br />
      <input
        type="text"
        className="w-50 form-control mx-auto"
        placeholder="Filter students by firstname or lastname"
      />
      <div className="p-5 d-flex flex-wrap justify-content-center ">

        { 
          props.dataList.map((s, index) => {
            return <Student data={s} key={index}/>;
          })
        }
      </div>
    </div>
  );
}
