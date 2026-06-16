import axios from 'axios';
import ENV from '../../../config/environment';

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: ENV.TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});

// ── Request Interceptor ──────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.metadata = { startTime: Date.now() };
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response Interceptor ─────────────────────────
api.interceptors.response.use(
  (response) => {
    const duration = Date.now() - response.config.metadata?.startTime;
    console.log(`← [${response.status}] ${response.config.url} (${duration}ms)`);
    return response;
  },
  async (error) => {
    const status = error.response?.status;
    const config = error.config;

    // Auto-retry once on network error
    if (!error.response && !config._retry) {
      config._retry = true;
      return api(config);
    }

    switch (status) {
      case 401:
        localStorage.removeItem('token');
        window.location.href = '/login';
        break;
      case 403:
        window.location.href = '/login';
        break;
      case 404:
        console.warn('Resource not found:', config.url);
        break;
      case 500:
        console.error('Server error');
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default api;
