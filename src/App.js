import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Route } from "react-router";
import { Routes, Link, Navigate } from "react-router-dom";
import Form from "./Components/Form";
import About from "./Components/About";
import shell from "./Components/Shells";
import Shells from "./Components/Shells";


function App() {
  const [shellList,setShellList]=useState([])
  const pickUpShell= (shell) => {
    console.log(shell)

    setShellList([...shellList,shell])
  }
  // const [sumn, setSumn] = useState([]);

  // useEffect(() => {
  //   fetch("https://poetrydb.org//lines/zebra")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     // .then(data => setSumn((data)))
  //     .then((data) => setSumn(data[0].lines + " - " + data[0].author));
  //   // .then(data => setSumn((data[0].lines)))
  // }, []);


  const handleShell = (title) => {
    setShellList(title);
  }


  return (
    <div className="App">
      <nav>
        <Link to="/About/">poem.</Link>

        <Link to="/">gun</Link>
        <br/>
      
        <Link to='/Shells/'>
     Shells
     </Link>
      </nav>
      <h1>︻╦╤=─</h1>

      <main>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/About/" element={<About />} />
          <Route path="/Shells/" element= {<Shells pickUpShell={handleShell} title={shellList}/>} />
        </Routes>
      </main>
   
    </div>
  );
}

export default App;
