import api from './AxiosInstance';

// All product / page-level API calls go here
export const pageService = {
  getProducts: () => api.get('/api/products'),
  getProductById: (id) => api.get(`/api/products/${id}`),
  addToCart: (payload) => api.post('/api/cart', payload),
  removeFromCart: (id) => api.delete(`/api/cart/${id}`),
  getCart: () => api.get('/api/cart'),
};
