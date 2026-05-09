import React from "react";
import SignUp from "./pages/authPages/SIgnUp";
import Login from "./pages/authPages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/Admin/Dashboard";
import AddProduct from "./pages/Admin/AddProduct";
import AuthRoute from "./routes/authRoutes";
import PrivateRoute from "./routes/privateRoutes";
import UserDashboard from "./pages/User/UserDashboard";

const  App = () => {
  

  return (
    <>
      <Routes>

      <Route path="/" element={<Home />} />


        <Route element={<AuthRoute />}>
          <Route path="/authPages/SignUp" element={<SignUp />} />
          <Route path="/authPages/Login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/User/UserDashboard" element={<UserDashboard />} />
          <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/Admin/AddProduct" element={<AddProduct />} />
        </Route>
        
      
        
      </Routes>
      
    </>
  )
} 

export default App
