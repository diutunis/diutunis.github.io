import { useEffect, useState } from "react";
import searchTerm from "./Form";
import { Link, Route } from "react-router-dom";

function Shell(props) {
  const [shell, setShell] = useState([]);

  useEffect(() => {
    fetch(`https://poetrydb.org/lines/${searchTerm}/author,lines,title`)
      .then((response) => response.json())
      .then((data) => {
        setShell(data[0].title);
      });
  }, [props.title]);


  let shellDisplay = "";
  if (shell.title) {
    shellDisplay = (
      <div>
   
        <h3>{shell.Title}</h3>
        

  
      </div>
    );



  }
  return(
      <div>
          <h1>
             shells
          </h1>

 {shellDisplay}
      </div>
  )







}
export default Shell
