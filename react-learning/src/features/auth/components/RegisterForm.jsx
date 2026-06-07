import { Link } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (value) => {
        console.log('form value', value)
        if (value.name && value.password && value.email) {
            const email = value.email;
            const password = value.password;
            const userName = value.name
            // dispatch(loginUserCase({ user: { email, password, userName }, token: "123456789Token" }));
        }
    };
    return (
        <>
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <div className="logo-img">
                                <img src="src/assets/amazon-logo.webp" />
                            </div>
                            <h5 className="text text-large text-primary">Register</h5>
                        </div>
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-controls">
                                <label for="name" className="input-label" >Name</label>
                                <input type="text" {...register('name', { required: 'Name is required' })} id="name" className="input-field" placeholder="Name" />
                                  {errors.name && <div className="text-danger">{errors.name.message}</div>}
                            </div>
                            <div className="input-controls mt-2">
                                <label for="email" className="input-label" >Email</label>
                                <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })} id="email" className="input-field" placeholder="Email" />
                                  {errors.email && <div className="text-danger">{errors.email.message}</div>}
                            </div>
                            <div className="input-controls mt-2">
                                <label for="password" className="input-label" >Password</label>
                                <input type="text" {...register('password', { required: 'Password is required' })} id="password" className="input-field" placeholder="Password" />
                                  {errors.password && <div className="text-danger">{errors.password.message}</div>}
                            </div>
                            <div className="input-control mt-2">
                                <input type="submit" name="submit" className="input-submit" value="Submit"  />
                                <p className="text text-normal ml-10">Already have an account? <span><Link to="/login" className="text text-links">Login here</Link></span></p>
                            </div>
                        </form>

                    </section>
                </div>
            </main>
        </>
    )
}