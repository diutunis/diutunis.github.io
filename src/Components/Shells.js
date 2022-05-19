import { useEffect, useState } from "react";
import searchTerm from "./Form";
import { Link, Route } from "react-router-dom";
import shellList from "./ShellButton";


function Shells(props) {
    return(
       <div>
           <p>The bullet reads: {props.title}</p>
       </div>
    )

}
export default Shells;














