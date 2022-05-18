
import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import App from "../App";


// import PoemList from "./PoemList"
// import handleSubmit from "./PoemList"

function Form() {

    const [searchTerm, setSearchTerm] = useState("");
    const [poemLines, setPoemLines] = useState(null);
    const [poemTitle, setPoemTitle] = useState(null);
    const [poemAuthor, setPoemAuthor] = useState(null);
    
    
  
    const updateSearchTerm = (event) => {
      setSearchTerm(event.target.value);
    };
  
    
    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        fetch(`https://poetrydb.org//lines/${searchTerm}/author,lines,title`)
          .then((response) => response.json())
          .then((data) => {
            setPoemLines((data[0].lines));
            setPoemTitle((data[0].title));
            setPoemAuthor((data[0].author))

          });
      };
    
      
      let poemDisplay = "";
      if (poemLines !== null) {
        poemDisplay = (
          <div>
            <h2>{searchTerm}</h2>
              <h4>{poemTitle}
                 </h4>
            <h3>{poemAuthor}</h3>
           
                <p>{poemLines}</p>
                
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
