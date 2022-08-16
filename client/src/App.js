import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/pages/login/Login"; 
import Register from "./components/pages/register/Register"


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>          
          <Route path="/login" element={<Login />}></Route>  
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
