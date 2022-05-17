
// import React from "react";
// import { useEffect, useState } from "react";


// function Form() {

//     const [searchTerm, setSearchTerm] = useState("");
//     const [poemList, setPoemList] = useState(null);
  
//     const updateSearchTerm = (event) => {
//       setSearchTerm(event.target.value);
//     };
//     const handleSubmit = (event) => {
//       // prevent page reload
//       event.preventDefault();
//       fetch(`https://poetrydb.org//lines/${searchTerm}`)
//         .then((response) => response.json())
//         .then((data) => {
//           // reset searchTerm to empty
//           setSearchTerm("");
//           setPoemList(data[0]);
//         });
//     };
  
    
//     let poemDisplay = "";
//     if (poemList !== null) {
//       poemDisplay = (
//         <div>
//           <h2>title:{poemList}</h2>
//         </div>
//       );
//     }
  
//     return (
//       <div >
//         <h1>ZOOGLE</h1>
//         <form onSubmit={handleSubmit}>
//           <label>Title:</label>
//           <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="poem"/>
//           <input type="submit" value="cmon" />
//         </form>
//         {poemDisplay}
//       </div>
  
//     );
//   }

// export default Form;
