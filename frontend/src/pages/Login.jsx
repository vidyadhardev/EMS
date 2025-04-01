import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email,password)
    
        try {
            const respnse = await axios.post("http://localhost:5000/api/auth/login",{email,password})
            alert("Login Successfull .")
            console.log(respnse);
            
        } catch (er) {
            alert("Check Your crediention !")
            console.log("Some Issue : ",er);
        }
    }
    return (
        <div className='flex flex-col items-center h-screen justify-center 
        bg-gradient-to-b from-indigo-200 from-50% to-indigo-100 to-50% space-y-6'>
            <h2 className=' font-Ga+Maaml text-3xl text-white'>Employee Managment System</h2>
            <div className='border shadow p-6 w-96 bg-white rounded-md border-l-rose-900'>
                <h2 className=' text-2xl font-bold mb-4'>
                    Login User ..
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className=' mb-4'>
                        <label htmlFor='email'
                            className=' block text-gray-700'>E-mail</label>
                        <input type='email'
                            className='w-full px-3 py-2 border'
                            placeholder='Enter E-Mail'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'
                            className=' block text-gray-700'
                        >Password</label>
                        <input type='password'
                            className='w-full px-3 py-2 border'
                            placeholder='*******'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label className='inline-flex items-center'>
                            <input type='checkbox' className='form-checkbox' />
                            <span className='ml-2 text-gray-700 '>Remember Me</span>
                        </label>
                        <a href='#' className='text-teal-600'>Forgate Password</a>
                    </div>
                    <div className='mb-4'>
                        <button className='w-full bg-teal-600 py-2 btn btn-outline-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
