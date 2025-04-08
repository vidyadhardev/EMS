import React from 'react';
import {Navigate} from "react-router-dom"
import { useAuth } from '../Context/authContext';
const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
       return <div>Loadiing ...</div>
    }

    return user ? children:<Navigate to="/login"/>
}

export default PrivateRoutes;
