
import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import App from "../App";

// import PoemList from "./PoemList"
// import handleSubmit from "./PoemList"

function Form() {

    const [searchTerm, setSearchTerm] = useState("");
    const [poemList, setPoemList] = useState(null);
    
  
    const updateSearchTerm = (event) => {
      setSearchTerm(event.target.value);
    };
  
    
    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        fetch(`https://poetrydb.org//lines/${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            setPoemList((data[0].lines));
          });
      };
    
      
      let poemDisplay = "";
      if (poemList !== null) {
        poemDisplay = (
          <div>
            <h2>{searchTerm}</h2>
                <p>{poemList}</p>
          </div>
        );
      }
  
    

  
    return (
      <div >
         
        
        <form onSubmit= {handleSubmit}>
          <label>reload:</label>
          <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="ammo"/>
          <input type="submit" value="trigger" />
        </form>
        <p>{poemDisplay}
  

            </p>
            
      
    
      </div>
  
    );
  }

export default Form;
