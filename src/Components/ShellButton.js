import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import addPoemToShell from "../App";
import shell from"./Shells"
import Shells from "./Shells";



function ShellButton(props){

    const [shellList,setShellList]=useState(null)
    const addPoemToShell= (shell) => {
      console.log(shell)


        fetch(`https://poetrydb.org/title/${searchTerm}/author,lines,title`)
          .then((response) => response.json())
          .then((data) => {
        
            setShellList(data[0].title);
          });
   





  
    //   setShellList([...shellList,shell])
   

    }

    return(


<div>

<button onClick={() => addPoemToShell(shell)} >pick up</button>    
</div>

    )}

    export default ShellButton