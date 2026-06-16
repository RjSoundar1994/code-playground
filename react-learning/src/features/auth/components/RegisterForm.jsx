import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, setLoading, clearError } from '../../../hooks/storeSlice';
import { userService } from '../services/userService';
import amazonLogo from '../../../assets/amazon-logo.webp';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.amazonInfo);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate('/home', { replace: true });
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (values) => {
    dispatch(setLoading(true));
    try {
      const { data } = await userService.register({
        userName: values.name,
        email: values.email,
        password: values.password,
      });
      // Auto-login after successful registration
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message ?? 'Registration failed. Please try again.'));
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
            <h5 className="text text-large text-primary">Create Account</h5>
          </div>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="input-controls">
              <label htmlFor="name" className="input-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="First and last name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <div className="text-danger">{errors.name.message}</div>}
            </div>

            <div className="input-controls mt-2">
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
                placeholder="At least 6 characters"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Minimum 6 characters required' },
                })}
              />
              {errors.password && <div className="text-danger">{errors.password.message}</div>}
            </div>

            <div className="input-controls mt-2">
              <label htmlFor="confirmPassword" className="input-label">
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="input-field"
                placeholder="Re-enter password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (val) => val === watch('password') || 'Passwords do not match',
                })}
              />
              {errors.confirmPassword && (
                <div className="text-danger">{errors.confirmPassword.message}</div>
              )}
            </div>

            <div className="input-control mt-2">
              <input
                type="submit"
                className="input-submit"
                value={loading ? 'Creating account…' : 'Create account'}
                disabled={loading}
              />
              <p className="text text-normal mt-2 ml-10">
                Already have an account?{' '}
                <Link to="/login" className="text text-links">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
