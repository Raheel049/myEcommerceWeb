import React from "react";
import SignUp from "./pages/authPages/SIgnUp";
import Login from "./pages/authPages/Login";
import { Routes, Route } from "react-router-dom";

const  App = () => {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/authPages/Login" element={<Login />} />
      </Routes>
      
    </>
  )
} 

export default App
