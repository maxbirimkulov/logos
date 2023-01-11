import {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Register from "./pages/Register/Register";


function App() {



  return (
    <div className="App">


        <div style={{display: "flex", columnGap: "20px"}}>
            <Link to='/'>home</Link>
            <Link to='/catalog'>catalog</Link>
            <Link to='/register'>register</Link>
        </div>

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
