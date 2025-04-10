import React from 'react';
import { NavLink } from "react-router-dom";
import { FaBuilding, FaCalendar, FaMoneyBill, FaStreetView, FaTabletAlt, FaUsers } from "react-icons/fa";
const AdminSidebar = () => {
    return (
        <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64 '>
            <div className='bg-teal-600 h-12 flex items-center justify-center'>
                <h3 className='text-2xl text-center font-serif'>Employee Ms</h3>
            </div>
            <div className='px-4 '>
                <NavLink to="/admin-dashboard"
                    className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block 
                    py-2.5 px-4 rounded no-underline text-white`} end>
                    <FaTabletAlt />
                    <span> Dashboard</span>
                </NavLink>
                <NavLink to="/admin-dashboard"
                    className="flex items-center space-x-4 block py-2.5 px-4 rounded no-underline text-white">
                    <FaUsers />
                    <span> Eployee</span>
                </NavLink>
                <NavLink to="/admin-dashboard/departments"
                     className={({ isActive }) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block 
                     py-2.5 px-4 rounded no-underline text-white`}>
                    <FaBuilding />
                    <span> Department</span>
                </NavLink>
                <NavLink to="/admin-dashboard"
                    className="flex items-center space-x-4 block py-2.5 px-4 rounded no-underline text-white">
                    <FaCalendar />
                    <span> Leave</span>
                </NavLink>
                <NavLink to="/admin-dashboard"
                    className="flex items-center space-x-4 block py-2.5 px-4 rounded no-underline text-white">
                    <FaMoneyBill />
                    <span> Salary</span>
                </NavLink>
                <NavLink to="/admin-dashboard"
                    className="flex items-center space-x-4 block py-2.5 px-4 rounded no-underline text-white">
                    <FaStreetView />
                    <span> Setting</span>
                </NavLink>
            </div>
        </div>
    );
}

export default AdminSidebar;
