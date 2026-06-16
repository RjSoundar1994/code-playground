import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { userService } from '../services/userService';
import amazonLogo from '../../../assets/amazon-logo.webp';

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    setLoading(true);
    setApiError(null);
    try {
      await userService.forgotPassword({ email: values.email });
      setSubmitted(true);
    } catch (err) {
      setApiError(err.response?.data?.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
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
            <h5 className="text text-large text-primary">Password assistance</h5>
          </div>

          {submitted ? (
            <div className="alert alert-success py-2">
              If that email is registered, a reset link has been sent. Please check your inbox.
            </div>
          ) : (
            <>
              <p className="text text-normal">
                Enter the email address associated with your account and we will send you a link to
                reset your password.
              </p>

              {apiError && <div className="alert alert-danger py-2">{apiError}</div>}

              <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="input-controls">
                  <label htmlFor="email" className="input-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
                    })}
                  />
                  {errors.email && <div className="text-danger">{errors.email.message}</div>}
                </div>

                <div className="input-control mt-2">
                  <input
                    type="submit"
                    className="input-submit"
                    value={loading ? 'Sending…' : 'Continue'}
                    disabled={loading}
                  />
                </div>
              </form>
            </>
          )}

          <p className="text text-normal mt-2">
            <Link to="/login" className="text text-links">
              ← Back to Sign In
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
