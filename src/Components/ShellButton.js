import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import addPoemToShell from "../App";
import shell from"./Shells"
import Shells from "./Shells";



function ShellButton(props){

    const [shellList,setShellList]=useState([])
    const addPoemToShell= (shell) => {
      console.log(shell)
  
      setShellList([...shellList,shell])
   

    }

    return(


<div>

<button onClick={() => props.addPoemToShell(shell)} >pick up</button>    
</div>

    )}

    export default ShellButton