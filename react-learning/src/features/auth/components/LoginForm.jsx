import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserCase } from "../../../hooks/storeSlice";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { userService } from "../services/userService";

export default function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (value) => {
        console.log('form value', value)
        if (value.email && value.password) {
            // const email = value.email;
            // const password = value.password;
            // const userName = 'Soundar'
            // dispatch(loginUserCase({ user: { email, password, userName }, token: "123456789Token" }));

            let payload = {
                email: value.email,
                password: value.password
            }
            console.log('payload', payload)
            const data = await userService.post(payload, '/private/api/login');
            console.log('login data', data)
            if (data) {
                console.log('login data two', data)
                try {
                    dispatch(loginUserCase({ user: { email, password, userName }, token: "123456789Token" }));
                } catch (err) {
                    setError(err.response?.data?.message || "Failed to fetch");
                } finally {
                    // setLoading(false);
                }
            }

        }
    };
    const isAuthenticated = useSelector((state) => state.amazonInfo.isAuthenticated)
    if (isAuthenticated) {
        navigate('/home')
    }

    return (
        <>
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <div className="logo-img">
                                <img src="src/assets/amazon-logo.webp" />
                            </div>
                            <h5 className="text text-large text-primary">Sign In</h5>
                            <p className="text text-normal">New user? <span><Link to="/register" className="text text-links">Create an account</Link></span>
                            </p>
                        </div>
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-controls">
                                <label for="email" className="input-label" >Email Address</label>
                                <input type="email" {...register('email', { pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }, required: 'Email is required' })} id="email" className="input-field" placeholder="Email" />
                                {errors.email && <div className="text-danger">{errors.email.message}</div>}
                            </div>
                            <div className="input-controls mt-2">
                                <label for="password" className="input-label" >Password</label>
                                <input type="password" {...register('password', { minLength: { value: 6, message: 'Minimum 6 characters required' }, maxLength: { value: 10, message: 'Maximum 10 characters required' }, required: 'Password is required' })} id="password" className="input-field" placeholder="Password" />
                                {errors.password && <div className="text-danger">{errors.password.message}</div>}
                            </div>
                            <div className="input-control mt-2">
                                <Link to="/forgotPassword" className="text text-links">Forgot Password</Link>
                                <input type="submit" className="input-submit" value="Sign In" />
                            </div>
                        </form>

                    </section>
                </div>
            </main>
        </>
    )
}