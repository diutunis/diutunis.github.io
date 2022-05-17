import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Route } from 'react-router';
import { Routes, Link, Navigate } from "react-router-dom";
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

  <nav>
  <Link to='/'>
      ︻╦╤─
     </Link>


      
    
              
             
          
        
          </nav>
        
      
        <main>
        <Routes>
         <Route path ='/' element={<Form/>}/>
         </Routes>
           

            </main>


    </div>
  );
}

export default App;
