import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {FaCalendarAlt, FaHome, FaShoppingCart, FaWallet} from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-[#bd8aff]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 ">
                        <li><NavLink to={'/dashboard/home'}><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                        <li><NavLink to={'/dashboard/history'}><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li><NavLink to={'/dashboard/mycart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/menu'}> Our Menu</NavLink></li>
                        <li><NavLink to={'/order/salad'}> Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;