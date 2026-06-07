import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutCase } from "../hooks/storeSlice";

export default function Account() {
    const userInfo = useSelector((state) => state.amazonInfo.user)
    const [signInPopupFlag, setSignInPopupFlag] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(userLogoutCase({ action: 'logout' }))
    };
    return (
        <div>
            <div className="location-text link-active" onClick={() => setSignInPopupFlag(true)}>Hello, {userInfo?.name}</div>
            <div>
                <strong>Account & Lists</strong>
            </div>

            {signInPopupFlag && <div className="modal" >
                <div className="modal-dialog modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <div class="mb-3">
                                <h5 className="modal-title text-center">Are you sure you want to logout ?</h5>
                                <br></br>
                                <button type="button" className="btn bg-danger-subtle me-2" data-bs-dismiss="modal" onClick={() => setSignInPopupFlag(false)}>No</button>
                                <button type="button" className="btn bg-primary text-light" data-bs-dismiss="modal" onClick={handleClick}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

