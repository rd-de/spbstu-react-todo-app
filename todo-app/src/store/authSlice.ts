import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  id: number;
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Ошибка регистрации");

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return { id: data.id, email: data.email, token: data.token };
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }: { username: string; password: string }) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Неверные данные");

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return { id: data.id, email: data.email, token: data.token };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
