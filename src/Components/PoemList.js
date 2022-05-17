import React from "react";
import { useEffect, useState } from "react";
import searchTerm from "./Form"
// import setSearchTerm from "./Form"
// import searchTerm from "./Form"

const PoemList =()=>{
    const [poemList, setPoemList] = useState(null);
    const [poemTitle, setPoemTitle]= use 

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
       
        
          {poemDisplay}

        </div>
    
      );

}

export default PoemList