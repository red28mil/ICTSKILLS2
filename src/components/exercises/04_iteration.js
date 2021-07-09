import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = props => {
  const list = props.modules.map((module, index) => {
    return (
      <tr key={index}>
      <a href={module.url}> {module.name} </a>
      <a href={module.url}> {module.noLectures}</a>
      <a href={module.url}>{module.noPracticals}</a>
      
      </tr>
    
    );
  });
  return (
    <>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <h2>{props.type}</h2>
      
        <tbody>{list}</tbody>
      
      </table>
    </>
  );
};

export default Demo;