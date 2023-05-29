import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:4000/users');
        return res.json();
    })

    const handleDelete = user => {

    }

    return (
        <div className='py-24 px-8'>
            <Helmet>
                <title>Tasty Trove | All users</title>
            </Helmet>
            <div className="uppercase h-[60px]">
                <div className="text-3xl">Total Items: {users.length}</div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ 
                                    user.role === 'admin' ? 'admin' : <button className="btn btn-ghost bg-[#bd8aff]">
                                        <FaUserShield></FaUserShield>
                                    </button>
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;