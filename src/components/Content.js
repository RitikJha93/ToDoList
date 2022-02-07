import React from "react";

export default function Content(props) {
  return (
    <div className="content">
      <input
        type="text"
        placeholder="✍️Add your items"
        value={props.value}
        onChange={props.change}
      />
      {props.toggle ? (
        <i className="fas fa-edit edit" onClick={props.click}></i>
      ) : (
        <i className="fas fa-plus edit" onClick={props.click}></i>
      )}
    </div>
  );
}
