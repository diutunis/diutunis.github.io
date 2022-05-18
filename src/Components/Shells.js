

import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import App from "../App";
import selectedPoem from "./Form"
import poemTitle from "./Form"
import searchTerm from "./Form"





let Shells =()=>{    
    
    const [shell, setShell] = useState({poemTitle});
    


    let shellDisplay = "";
        if (shell !== null) {
          shellDisplay = (
            <div>
              <h2></h2>
                <h4>{shell}
                   </h4>
            
              
            </div>
          )
        }

    return (

    

        
      <p>
      {shellDisplay}
      </p>
    )
  }

export default Shells;