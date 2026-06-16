// Centralised environment config — swap values per deployment target
const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  TIMEOUT: 10_000,
};

export default ENV;
