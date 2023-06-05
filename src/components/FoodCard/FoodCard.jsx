/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { name, recipe, image, price, _id } = item;
    const handleAddToCart = item => {
        if(user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('https://tasty-trove-server.vercel.app/carts', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    refetch(); //refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            })
        } else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}});
                }
              })
              
        }
    }

    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 bg-[#35096f] text-white bg-opacity-80'>$ {price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 bg-[#e1cff6] border-b-4 btn-primary mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;