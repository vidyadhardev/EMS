import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { columns ,DepartmentButtons} from '../../utils/DepartmentHelpers';

const DepartmentsList = () => {
    const [department, setDepartmen] = useState([]);
    const [depLoading, setDepLoading] = useState(false);
    useEffect(() => {
        const fetchDepartments = async () => {
            setDepLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/department', {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                });
                if (response.data.success) {
                    let sno = 1;
                    const data = await response.data.departments.map((dep) => ({
                        _id: dep._id,
                        sno: sno++,
                        dep_name: dep.dep_name,
                        action: (<DepartmentButtons _id={dep._id} />),
                    }));
                    setDepartmen(data);
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            } finally{
                setDepLoading(false);
            }
        }
        fetchDepartments();
    }, [])
    return (

        <>{depLoading ? <div>Loading ...</div> :
            <div className='p-3'>
                <div className='text-center'>
                    <h3 className='text-2xl font-bold'> Manage Departments</h3>
                </div>
                <div className='flex justify-between items-center '>
                    <input type='text' placeholder='Search By Dep. Name'
                        className='px-4 py-0.5 border shadow-xl bg-transparent border-stone-500 text-green-500 rounded-md' />
                    <Link to='/admin-dashboard/add-department'
                        className='px-4 py-1 bg-teal-600 text-white no-underline rounded-lg'
                    >Add New Department</Link>
                </div>
                <div className='mt-5'>
                    <DataTable
                        columns={columns}
                        data={department}
                    >
                    </DataTable>
                </div>
            </div>
        }</>
    );
}

export default DepartmentsList;
