import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/loginUser', 
  async (credentials: {email: string; password: string}, {rejectWithValue}) => {
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    const user = users.find((u: {email: string; password: string}) => u.email === credentials.email && u.password === credentials.password);

    if (!user) return rejectWithValue('Invalid credentials')

      const token = 
  }
)
// const API_URL = 'https://dummyjson.com/auth'; 

// interface AuthState {
//   user: { id: number; email: string } | null;
//   token: string | null;
//   isAuthenticated: boolean;
//   status: 'idle' | 'loading' | 'failed';
// }

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem('token') || null,
//   isAuthenticated: !!localStorage.getItem('token'),
//   status: 'idle',
// };
// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async ({ email, password }: { email: string; password: string }) => {
//     const response = await fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     return { id: data.id, email: data.email, token: data.token };
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }: { email: string; password: string }) => {
//     const response = await fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();
//     return { id: data.id, email: data.email, token: data.token };
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.user = { id: action.payload.id, email: action.payload.email };
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         localStorage.setItem('token', action.payload.token);
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user = { id: action.payload.id, email: action.payload.email };
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         localStorage.setItem('token', action.payload.token);
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
