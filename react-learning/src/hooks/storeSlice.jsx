import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: localStorage.getItem('userName') ?? null,
    email: null,
  },
  token: localStorage.getItem('token') ?? null,
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
  cartInfo: [],
};

const storeSlice = createSlice({
  name: 'storeInfo',
  initialState,
  reducers: {
    // ── Auth ────────────────────────────────────
    setLoading(state, action) {
      state.loading = action.payload;
    },
    loginSuccess(state, action) {
      const { user, token } = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user.name = user.userName ?? user.name ?? null;
      state.user.email = user.email ?? null;
      state.token = token;
      state.cartInfo = [];
      localStorage.setItem('token', token);
      localStorage.setItem('userName', state.user.name);
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuthenticated = false;
      state.cartInfo = [];
      state.error = null;
      localStorage.clear();
    },
    clearError(state) {
      state.error = null;
    },

    // ── Cart ─────────────────────────────────────
    addToCart(state, action) {
      const exists = state.cartInfo.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.cartInfo.push(action.payload);
      } else {
        state.error = `"${action.payload.name}" is already in your cart.`;
      }
    },
    removeFromCart(state, action) {
      state.cartInfo = state.cartInfo.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.cartInfo = [];
    },
  },
});

export const {
  setLoading,
  loginSuccess,
  loginFailure,
  logout,
  clearError,
  addToCart,
  removeFromCart,
  clearCart,
} = storeSlice.actions;

export default storeSlice.reducer;
