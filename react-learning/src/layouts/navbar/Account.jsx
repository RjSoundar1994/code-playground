import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Account() {
    const [signInPopupFlag, setSignInPopupFlag] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/register');
    };
    return (
        <div>
            <div className="location-text link-active" onClick={() => setSignInPopupFlag(true)}>Hello, sign in</div>
            <div>
                <strong>Account & Lists</strong>
            </div>

            {signInPopupFlag && <div className="modal" >
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center">Sign in or create account</h5>
                        </div>
                        <div className="modal-body container">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <button type="button" className="btn bg-warning me-2">Login</button>
                                <button type="button" className="btn bg-danger-subtle me-2" data-bs-dismiss="modal" onClick={() => setSignInPopupFlag(false)}>Close</button>
                                <button type="button" className="btn bg-primary text-light" data-bs-dismiss="modal" onClick={handleClick}>Register</button>
                            </div>
                            <div class="mb-3">
                                <p>By continuing, you agree to Amazon's <span className="text-primary">Conditions of Use</span> and <span className="text-primary">Privacy Notice.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

