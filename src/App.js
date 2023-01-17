import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

import './styles/style.scss'
import Login from "./pages/Login/Login";
import Sales from "./pages/Sales/Sales";
import Delivery from "./pages/Delivery/Delivery";



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/sales'} element={<Sales/>}/>
                <Route path={'/delivery'} element={<Delivery/>}/>
            </Route>
            <Route path={'register'} element={<Register/>}/>
            <Route path={'login'} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
