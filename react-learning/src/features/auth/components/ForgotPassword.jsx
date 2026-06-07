import { Link } from "react-router-dom";
import "./login.css";

export default function ForgotPassword() {
    return (
        <>
            <main className="main">
                <div className="container">
                    <section className="wrapper">
                        <div className="heading">
                            <div className="logo-img">
                                <img src="src/assets/amazon-logo.webp" />
                            </div>
                            <h5 className="text text-large text-primary">Forgot Password</h5>
                        </div>
                        <form name="signin" className="form">
                            <div className="input-control">
                                <label for="email" className="input-label" hidden>Email Address</label>
                                <input type="email" name="email" id="email" className="input-field" placeholder="Email Address" />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Password</label>
                                <input type="password" name="password" id="password" className="input-field" placeholder="Password" />
                            </div>
                            <div className="input-control">
                                <label for="password" className="input-label" hidden>Confirm Password</label>
                                <input type="password" name="confirmPassword" id="password" className="input-field" placeholder="Confirm Password" />
                            </div>
                            <div className="input-control">
                                <input type="submit" name="submit" className="input-submit" value="Submit" disabled />
                                <p className="text text-normal ml-10">Already have an account? <span><Link to="/login" className="text text-links">Login here</Link></span></p>
                            </div>
                        </form>

                    </section>
                </div>
            </main>
        </>
    )
}