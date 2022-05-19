import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import App from "../App";
import ShellButton from "./ShellButton"
import Shells from "./Shells"




function Form() {
  const [searchTerm, setSearchTerm] = useState("");
  const [poemLines, setPoemLines] = useState(null);
  const [poemTitle, setPoemTitle] = useState([]);
  const [poemAuthor, setPoemAuthor] = useState(null);
  const [shell, setShell]= useState([]);


  let updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://poetrydb.org//title/${searchTerm}/author,lines,title`)
      .then((response) => response.json()
      .then((data) => {
        setPoemTitle(data[0].title);
        setPoemAuthor(data[0].author);
        setPoemLines(data[0].lines);

      }))
    
    
    
    }


  let poemDisplay = "";
  if (poemLines !== null) {
    poemDisplay = (
      <div>
        <p>{searchTerm}</p>
        <h3>{poemTitle}</h3>
        <h4>{poemAuthor}</h4>

        <p>{poemLines}</p>


      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Reload:</label>
        <input
          onChange={updateSearchTerm}
          value={searchTerm}
          type="text"
          placeholder="Ammo"
        />
        <input type="submit" value="Trigger" />
      </form>

      <p className="poem">{poemDisplay}</p>
    <div className="shell">    
      
        <ShellButton collectShell={()=>{
          setShell([...shell," ", poemAuthor])
        }

        }/>
      <Shells title={shell}/>
     
    </div>

    </div>
  );
}

export default Form;
