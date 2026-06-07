import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserCase } from "../../../hooks/storeSlice"

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log('form value', e)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        dispatch(loginUserCase({ user: { email, password }, token: "123456789Token" }));
    };
    const isAuthenticated = useSelector((state) => state.amazonInfo.isAuthenticated)
    console.log('isAuthenticated', isAuthenticated)
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
                        <form  className="form" onSubmit={ handleSubmit}>
                            <div className="input-control">
                                <label for="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" id="email" className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" id="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <Link to="/forgotPassword" className="text text-links">Forgot Password</Link>
                                <input type="submit" className="input-submit" value="Sign In"  />
                            </div>
                        </form>

                    </section>
                </div>
            </main>
        </>
    )
}