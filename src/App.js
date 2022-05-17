import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Form from './Components/Form';



function App() { 
  
const [sumn, setSumn]= useState([])

useEffect(() => {
  fetch('https://poetrydb.org//lines/zebra')
.then(response => response.json())
.then(data=> console.log(data))
// .then(data => setSumn((data)))
.then(data => setSumn((data[0].lines) + " - " + (data[0].author)))
// .then(data => setSumn((data[0].lines)))
},[])





  return (
    <div className="App">
       {/* <h1>OMDb MOVIE APP</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholder="Movie Title"/>
        <input type="submit" value="Find Movie Info" />
      </form>
      <p>{message}</p>
      {movieDisplay} */}


      <h1>
        
        </h1>
        <Form/>
   


    </div>
  );
}

export default App;
