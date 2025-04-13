import React from 'react';
import SummaryCard from './SummaryCard';
import { FaBuilding, FaCheckCircle, FaFile, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers } from 'react-icons/fa';

const AdminSummary = () => {
    return (
        <div className='p-6'>
            <h3 className=' text-3xl font-bold'>Dhashboard Overview</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                <SummaryCard icon={<FaUsers/>} text="Total Employee" number={13} color="bg-teal-600" />
                <SummaryCard icon={<FaBuilding/>} text="Total Departments" number={4} color="bg-yellow-600"/>
                <SummaryCard icon={<FaMoneyBillWave/>} text="Total Departments" number={`$2500`} color="bg-red-600"/>
            </div>
            <div className='mt-12'>
                <h4 className='text-center text-2xl font-bold'>Leave Detailes</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <SummaryCard icon={<FaFile/>} text="Leave Applied" number={5} color="bg-teal-600"/>
                <SummaryCard icon={<FaCheckCircle/>} text="Leave Approved" number={2} color="bg-green-600"/>
                <SummaryCard icon={<FaHourglassHalf/>} text="Leave Pendings" number={1} color="bg-yellow-600"/>
                <SummaryCard icon={<FaTimesCircle/>} text="Leave Rejected" number={0} color="bg-red-600"/>

                </div>
            </div>
        </div>
    );
}

export default AdminSummary;
