import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';

const AdminHome = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    return (
        <>
            <div className="ms-4 mt-4">
                <h3 className="text-3xl">Welcome back, {user.displayName}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 me-4">
                    <div className="p-5 shadow-xl rounded-xl bg-gradient-to-r from-green-500 to-[#9e8cb6dc] text-white">
                        <div className="text-center">Revenue</div>
                        <div className="stat-value text-center">${stats.revenue}</div>
                    </div>

                    <div className="p-5 shadow-xl rounded-xl bg-gradient-to-r from-yellow-500 to-[#9e8cb6dc] text-white">
                        <div className="text-center">New Users</div>
                        <div className="stat-value text-center">{stats.users}</div>
                    </div>

                    <div className="p-5 shadow-xl rounded-xl bg-gradient-to-r from-pink-500 to-[#9e8cb6dc] text-white">
                        <div className="text-center">Menu Items</div>
                        <div className="stat-value text-center">{stats.products}</div>
                    </div>
                    <div className="p-5 shadow-xl rounded-xl bg-gradient-to-r from-cyan-500 to-[#9e8cb6dc] text-white">
                        <div className="text-center">Orders</div>
                        <div className="stat-value text-center">{stats.orders}</div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminHome;