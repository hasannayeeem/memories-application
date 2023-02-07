import React from 'react';
import { Link,  } from 'react-router-dom';

const Profile = () => {
    return (
        <section className='lg:mt-[90px] mt-[129px]'>
            <div className=" flex flex-col justify-center md:flex-row mx-width mx-auto">
                <div className="md:w-1/3 lg:w-1/3 mx-auto  w-full">
                    <ul className="menu p-4 overflow-y-auto md:w-80 mx-auto glass text-base-content border m-3 shadow ">
                        <li className='w-full font-semibold'><Link to='/profile'>My Profile</Link></li>
                        <li className='w-full font-semibold'><Link to='/profile/address'>Address</Link></li>
                        <li className='w-full font-semibold'><Link to='/profile/education'>Education</Link></li>
                        <li className='w-full font-semibold'><Link to='/profile/important_links'>Important Links</Link></li>
                    </ul>
                </div>
                <div className="md:w-2/3 w-full md:m-3 shadow-lg">
                    {/* <Outlet /> */}
                </div>
            </div>
        </section >
    );
};

export default Profile;