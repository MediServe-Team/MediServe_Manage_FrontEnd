import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { loginService } from './AuthServices';

const initialState = {
  user: {},
  accessToken: '',
  isLoading: false,
  error: '',
};

// create action async Login
export const loginAction = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await loginService(email, password);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true;
    },
    finished: (state) => {
      state.isLoading = false;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.error = '';
      // if(action.payload)
    });

    // list pending
    const pendingList = [loginAction.pending];

    // list reject
    const rejectList = [loginAction.rejected];

    builder.addMatcher(isAnyOf(...rejectList), (state, action) => {
      state.isLoading = false;
      if (action.payload?.code === 'ERR_NETWORK') {
        state.error = 'Kiểm tra kết nối internet';
      } else {
        state.error = action.payload?.message;
      }
    });

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
    });
  },
});

export const { getUser } = AuthSlice.actions;

// get state from auth
export const getUserId = (state) => state.auth.user?.id;

export default AuthSlice.reducer;
