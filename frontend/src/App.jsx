import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      {/* <div className="">
        <div className='text-2xl font-serif text-purple-600'>Welcome To The Employee System Management ! </div>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
