
import React from "react";
import { useEffect, useState } from "react";
import PoemList from "./PoemList"
import handleSubmit from "./PoemList"

function Form() {

    const [searchTerm, setSearchTerm] = useState("");
  
    
  
    const updateSearchTerm = (event) => {
      setSearchTerm(event.target.value);
    };
  
    
  
    

  
    return (
      <div >
        <h1>︻╦╤─</h1>
        <form onSubmit= {handleSubmit}>
          <label>reload:</label>
          <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="ammo"/>
          <input type="submit" value="trigger" />
        </form>
        <p>
  <PoemList/>

            </p>
      
    
      </div>
  
    );
  }

export default Form;
