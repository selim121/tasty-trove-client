import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication.gif';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const {logIn} = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data, e) => {
        logIn(data.email, data.password)
        .then(() => {
            Swal.fire({
                title: 'User Login Successfully.',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              
            
            e.target.reset();
        })
    };

    const handleValidateCaptcha = (e) => {
        const value = e.target.value;
        if(validateCaptcha(value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Tasty Trove | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className='card-body'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" className="input input-bordered" {...register("password", { required: true })} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#612500f1]">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="Type the captcha above" className="input input-bordered" />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn border-0 bg-[#35096f]" type="submit" value="login" />
                            </div>
                            <p className='my-4 text-center'>New to TastyTrove ? <Link to={'/register'} className='text-[#4a02afdc] font-bold'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;