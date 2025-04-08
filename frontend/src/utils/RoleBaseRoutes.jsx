import React from 'react';
import { useAuth } from '../Context/authContext';
import { Navigate } from "react-router-dom";
const RoleBaseRoutes = ({ children, requierdRole }) => {
    const { user, loading } = useAuth();
    if (loading) {
      return <div>Loadiing ...</div>
    }
    if (!requierdRole.includes(user.role)) {
        <Navigate to="/unauthorized" />
    }
    return user ? children : <Navigate to="/login" />
}

export default RoleBaseRoutes;
