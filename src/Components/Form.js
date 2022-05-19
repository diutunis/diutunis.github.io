import React from "react";
import {useState } from "react";

import ShellButton from "./ShellButton"
import Shells from "./Shells"




function Form() {
  const [searchTerm, setSearchTerm] = useState("");
  const [poemLines, setPoemLines] = useState(null);
  const [poemTitle, setPoemTitle] = useState([]);
  const [poemAuthor, setPoemAuthor] = useState(null);
  const [shell, setShell]= useState([]);
  const [message, setMessage] = useState("")


  let updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://poetrydb.org//title/${searchTerm}/author,lines,title`)
      .then((response) => response.json()
      
      .then((data) => {  if (data.reason) {
        setMessage("Misfire!")
      } else{
        setPoemTitle(data[0].title);
        setPoemAuthor(data[0].author);
        setPoemLines(data[0].lines);
        console.log(data)
        setMessage("")

   } })
      
      
      
      )
    
    
    
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
<div className="formshell">


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
      <p className="errormessage" >
      {message}

      </p>

      <p className="poem">{poemDisplay}</p>
   
</div>
 <div className="shell">    
    
      
        <ShellButton collectShell={()=>{
          setShell([...shell," ", poemAuthor,"-", poemTitle])
        }

        }/>
      <Shells title={shell}/>
     
    </div>
    </div>
  );
}

export default Form;
