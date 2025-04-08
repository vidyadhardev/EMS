import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/login" element={<Login />} />
          {/* protect admin routes from PrivateRoutes & RoleBaseRoutes used */}
          <Route path="/admin-dashboard" element={
            <PrivateRoutes>
              <RoleBaseRoutes requierdRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          } />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
