import React from "react";
import { useEffect, useState } from "react";
import searchTerm from "./Form"
import setSearchTerm from "./Form"
import updateSearchTerm from "./Form"

const PoemList =()=>{
    const [poemList, setPoemList] = useState(null);

    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        fetch(`https://poetrydb.org//lines/${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            // reset searchTerm to empty
            setSearchTerm("");
            setPoemList(data[0].lines + data[1].lines);
          });
      };
    
      
      let poemDisplay = "";
      if (poemList !== null) {
        poemDisplay = (
          <div>
            <h2> {searchTerm}</h2>
                <p>{poemList}</p>
          </div>
        );
      }
    
      return (
        <div >
          <h1>︻╦╤─</h1>
          <form onSubmit={handleSubmit}>
            <label>reload:</label>
            <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="ammo"/>
            <input type="submit" value="trigger" />
          </form>
        
          {poemDisplay}
        </div>
    
      );

}

export default PoemList