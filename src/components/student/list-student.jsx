import React from "react";
import Student from "./student";

export default function ListStudent(props) {
  
  return (
    
    <div className="h-75 col-8 border p-5 overflow-scroll ">
        <div className="d-flex justify-content-center">
        <input
        onKeyUp = {props.handleFilterFromHome}
        type="text"
        className="w-50 form-control m-1"
        placeholder="Filter students by their first or last name"
        />
        <div className="btn btn-warning"><i className="fas fa-search"></i></div>
        </div>
        <div className="p-4 d-flex flex-wrap justify-content-center ">
           {
            props.dataList.map( s => 
            
              <Student 
                    key={s.id} 
                    data={s}
                    handleDeleteFromList={props.handleDeleteFromHome}
                    handleEditFromList = {props.handleEditFromHome}
                    handleViewMoreInfoFromList = {props.handleViewMoreInfoFromHome}
              />
            )
           }
        </div>
    </div>
  );
}