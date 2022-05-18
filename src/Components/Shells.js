import { useEffect, useState } from "react";
import searchTerm from "./Form";
import { Link, Route } from "react-router-dom";
import shellList from "../App"

function Shells(props) {
  const [shell, setShell] = useState([]);
  console.log(props);


    useEffect(() => {
      fetch(`https://poetrydb.org/lines/${searchTerm}/author,lines,title`)
        .then((response) => response.json())
        .then((data) => {
          setShell(data[0].title);
        });
    }, [props.title]);


//   let shellShow = props.title;

  return (
    <div>
      <h1>shells</h1>
      <p>{shell}</p>
    </div>
  );

  //   let shellDisplay = "";
  //   if (shell.title) {
  //     shellDisplay = (
  //       <div>

  //         <h3>{shell.Title}</h3>

  //       </div>
  //     );

  //   }
  //   return(
  //       <div>
  //           <h1>
  //              shells
  //           </h1>

  //  {shellDisplay}
  //       </div>
  //   )
}
export default Shells;
