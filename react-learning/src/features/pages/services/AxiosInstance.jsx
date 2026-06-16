// Re-export the shared auth axios instance so pages use the same base config
// (token injection, retry logic, error handling all included)
export { default } from '../auth/services/AxiosInstance';
