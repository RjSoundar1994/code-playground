import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../hooks/storeSlice';

export default function Account() {
  const userInfo = useSelector((state) => state.amazonInfo.user);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setShowLogoutModal(false);
  };

  return (
    <div>
      <div
        className="location-text link-active"
        onClick={() => setShowLogoutModal(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setShowLogoutModal(true)}
      >
        Hello, {userInfo?.name ?? 'Guest'}
      </div>
      <div>
        <strong>Account &amp; Lists</strong>
      </div>

      {showLogoutModal && (
        <div className="modal">
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div className="mb-3">
                  <h5 className="modal-title text-center">Are you sure you want to sign out?</h5>
                  <br />
                  <button
                    type="button"
                    className="btn bg-danger-subtle me-2"
                    onClick={() => setShowLogoutModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn bg-primary text-light"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
