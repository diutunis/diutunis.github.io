import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import App from "../App";
import ShellButton from "./ShellButton";
import Shell from"./Shells"
import Shells from "./Shells";

// import PoemList from "./PoemList"
// import handleSubmit from "./PoemList"

function Form(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [poemLines, setPoemLines] = useState(null);
  const [poemTitle, setPoemTitle] = useState(null);
  const [poemAuthor, setPoemAuthor] = useState(null);


  let updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();
    fetch(`https://poetrydb.org/title/${searchTerm}/author,lines,title`)
      .then((response) => response.json()
      .then((data) => {
        setPoemTitle(data[0].title);
        setPoemAuthor(data[0].author);
        setPoemLines(data[0].lines);
        // setShellList(data[0].title)
      }))

  //     const handleShell = (title) => {
  //       setShellList(title);
    
  // };
  let poemDisplay = "";
  if (poemLines !== null) {
    poemDisplay = (
      <div>
        <h2>{searchTerm}</h2>
        <h3>{poemTitle}</h3>
        <h4>{poemAuthor}</h4>

        <p>{poemLines}</p>

        {/* <button onClick={() => Shells.props.addPoemToShell(shell)} >pick up</button> */}
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>reload:</label>
        <input
          onChange={updateSearchTerm}
          value={searchTerm}
          type="text"
          placeholder="ammo"
        />
        <input type="submit" value="trigger" />
      </form>
      <p>{poemDisplay}</p>
      {/* <ShellButton title= {props.shellList} pickUpShell={props.handleShell}/> */}
    </div>
  );
}
}
export default Form;
