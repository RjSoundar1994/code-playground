import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, setLoading, clearError } from '../../../hooks/storeSlice';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { userService } from '../services/userService';
import amazonLogo from '../../../assets/amazon-logo.webp';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.amazonInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) navigate('/home', { replace: true });
  }, [isAuthenticated, navigate]);

  // Clear API error when component unmounts
  useEffect(() => {
    return () => dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (values) => {
    dispatch(setLoading(true));
    try {
      const { data } = await userService.login({
        email: values.email,
        password: values.password,
      });
      // Expected API response: { user: { userName, email }, token: '...' }
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message ?? 'Login failed. Please try again.'));
    }
  };

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <div className="logo-img">
              <img src={amazonLogo} alt="Amazon" />
            </div>
            <h5 className="text text-large text-primary">Sign In</h5>
            <p className="text text-normal">
              New user?{' '}
              <Link to="/register" className="text text-links">
                Create an account
              </Link>
            </p>
          </div>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="input-controls">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
                })}
              />
              {errors.email && <div className="text-danger">{errors.email.message}</div>}
            </div>

            <div className="input-controls mt-2">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters required' },
                  maxLength: { value: 50, message: 'Maximum 50 characters allowed' },
                })}
              />
              {errors.password && <div className="text-danger">{errors.password.message}</div>}
            </div>

            <div className="input-control mt-2">
              <Link to="/forgotPassword" className="text text-links">
                Forgot Password?
              </Link>
              <input
                type="submit"
                className="input-submit"
                value={loading ? 'Signing in…' : 'Sign In'}
                disabled={loading}
              />
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
