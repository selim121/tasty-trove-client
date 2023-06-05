import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const AdminHome = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

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

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 justify-center mt-12">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default AdminHome;