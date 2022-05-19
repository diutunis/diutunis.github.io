import { useEffect, useState } from "react";
import searchTerm from "./Form";
import { Link, Route } from "react-router-dom";
import shellList from "./ShellButton";

function Shells(props) {
    let myShells= props.title.map((shell, index)=>{
        return(
            <div>
                <h1>

                    {shell.title}
                </h1>
            </div>
        )
    })
    return (
        <div>
            {myShells}


        </div>
    )

}
export default Shells;














//   const [shell, setShell] = useState([]);
//   console.log(props);

//   useEffect(() => {
//     fetch(`https://poetrydb.org/lines/${searchTerm}/author,lines,title`)
//       .then((response) => response.json())
//       .then((data) => {
//         setShell(data[0].title);
//       });
//   }, [props.title]);

//   let shellShow = props.title;

//   return (
//     <div>
//       <h1>shells</h1>
//       <p>{shellList}</p>
//     </div>
//   );

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