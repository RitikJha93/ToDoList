import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Item from "./Item";

export default function Todo() {
  const getlocalData = () => {
    const newList = localStorage.getItem("mytodoList");

    if (newList) {
      return JSON.parse(newList);
    } else {
      return [];
    }
  };
  const [input, newInput] = useState("");
  const [item, newItem] = useState(getlocalData());
  const [isEdited, setisEdited] = useState();
  const [toggleBtn, settoggleBtn] = useState(false);

  function handleChange(event) {
    newInput(event.target.value);
  }

  const handleClick = () => {
    if (!input) {
      alert("Please enter something");
    } else if (input && toggleBtn) {
      item.splice(isEdited, 1, input);
      newItem(item);
      settoggleBtn(false);
      newInput("");

    } else {
      newItem([...item, input]);
      newInput("");
    }
  };

  const editItem = (id) => {
    const todoItem = item.find((currItem, index) => {
      return index === id;
    });
    newInput(todoItem);
    setisEdited(id);
    settoggleBtn(true);
  };
  function deleteItem(id) {
    const updateList = item.filter((foundItems, index) => {
      return index !== id;
    });
    newItem(updateList);
  }

  function removeAll() {
    newItem([]);
  }

  useEffect(() => {
    localStorage.setItem("mytodoList", JSON.stringify(item));
  }, [item]);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Content
            toggle={toggleBtn}
            value={input}
            click={handleClick}
            change={handleChange}
          />
          <Item arr={item} click={deleteItem} edit={editItem} />

          <button className="mybtn" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
}
