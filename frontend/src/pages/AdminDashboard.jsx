
import React from 'react';
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/dashboard/AdminSidebar';

const AdminDashboard = () => {
    const {user,loading}=useAuth();
    const navigate=useNavigate();
    if(loading){
        return <div> Loading ...</div>
    }
    if(!user){
        navigate('/login')
    }
    return (
        <div>
            Now You Navigate On <b>{user && user.name}</b>  dashboard 
            <AdminSidebar/>
        </div>
    );
}

export default AdminDashboard;
