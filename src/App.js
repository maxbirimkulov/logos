import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

import './styles/style.scss'



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
            </Route>
            <Route path={'register'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
