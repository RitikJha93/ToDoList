import React, { useState } from "react";

export default function Item(props) {
  function create(currItem, index) {
    return (
      <div className="showItems">
        <div className="eachItem" key={index}>
          <h3>{currItem}</h3>
          <div className="todoItem">
            <i
              className="fas fa-edit edit"
              onClick={() => props.edit(index)}
            ></i>
            <i
              className="fas fa-trash delete"
              onClick={() => props.click(index)}
            ></i>
          </div>
        </div>
      </div>
    );
  }
  return props.arr.map(create);
}
