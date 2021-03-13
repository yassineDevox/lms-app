import React from "react";
import Student from "./student";

export default function ListStudent(props) {
  
  return (
    
    <div className="h-75 col-8 border p-5 overflow-scroll ">
        <input
        onKeyUp = {props.handleFilterFromHome}
        type="text"
        className="w-50 form-control mx-auto"
        placeholder="Filter students by firstname or lastname"
        />
        <div className="p-5 d-flex flex-wrap justify-content-center ">
           {
            props.dataList.map(s => 
            
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