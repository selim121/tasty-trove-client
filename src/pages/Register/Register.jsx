import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import img from '../../assets/others/authentication.gif';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (data, e) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email};
                        fetch('https://tasty-trove-server.vercel.app/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    e.target.reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Register Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Tasty Trove | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleRegister)} className='card-body'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your photo url" className="input input-bordered" {...register("photoUrl", { required: true })} />
                                {errors.photoUrl && <span className='text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters.</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be 20 characters.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-[#35096f]" type="submit" value="Register" />
                            </div>
                            <p className='my-4 text-center'>Already have an account ? <Link to={'/login'} className='text-[#4a02afdc] font-bold'>Login</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;