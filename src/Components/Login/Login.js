import React from 'react';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';

const Login = () => {
    return (
        <div className='wrapper'>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <div className='w-1/3'>
                    <SectionHeader text={'Login'}></SectionHeader>
                    <div>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <span className='text-gray-500 text-sm'>Email</span>
                            <input type="email" name="" className='border w-full rounded px-1 py-1' id="" />
                            <span className='text-gray-500 text-sm'>Password</span>
                            <input type="password" name="" className='border w-full rounded px-1 py-1' id="" />
                            <div>
                                <input type="submit" value="Login" className='border px-3 py-1 cursor-pointer ' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;