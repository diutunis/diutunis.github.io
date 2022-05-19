import React from "react";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import addPoemToShell from "../App";
import shell from"./Shells"
import Shells from "./Shells";
import searchTerm from "./Form"



function ShellButton(props){

    // const [shellList,setShellList]=useState([])
    // const addPoemToShell= (shell) => {
    //   console.log(shell)


    //     fetch(`https://poetrydb.org/title/${searchTerm}/author,lines,title`)
    //       .then((response) => response.json())
    //       .then((data) => {
        
    //         setShellList([...shellList, data[0].title]);
    //       });
   





  
    //   setShellList([...shellList,shell])
   


    return(


<div>

<button onClick={() => props.pickUpShell(shell.title)} >pick up</button>    
</div>

    )}

    export default ShellButton