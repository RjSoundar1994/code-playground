import api from './AxiosInstance';

// All auth-related API calls go here
export const userService = {
  login: (payload) => api.post('/api/auth/login', payload),
  register: (payload) => api.post('/api/auth/register', payload),
  forgotPassword: (payload) => api.post('/api/auth/forgot-password', payload),
  resetPassword: (payload) => api.post('/api/auth/reset-password', payload),
};
