import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <>
            <Helmet>
                <title>Tasty Trove | My Cart</title>
            </Helmet>
            <SectionTitle
                heading={'Wanna add more?'}
                subHeading={'--My Cart--'}
            ></SectionTitle>
            <div className="uppercase font-semibold flex justify-evenly h-[60px]">
                <div className="text-3xl">Total Items: {cart.length}</div>
                <div className="text-3xl">Total Price: ${total}</div>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-end'>${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MyCart;