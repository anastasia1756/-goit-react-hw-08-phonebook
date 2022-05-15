import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('This user is already registrated!');
      }
      return rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Invalid password!');
      }
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue();
    }
  }
);
// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     // baseUrl: 'https://626d3e6150a310b8a34c4691.mockapi.io/api/v1/',
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   endpoints: build => ({
//     getContacts: build.query({
//       query: () => `contacts`,
//       providesTags: ['Contacts'],
//     }),
//     addPost: build.mutation({
//       query: body => ({
//         url: `contacts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deletePost: build.mutation({
//       query(id) {
//         return {
//           url: `contacts/${id}`,
//           method: 'DELETE',
//         };
//       },
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//     useGetContactsQuery,
//     useDeletePostMutation,
//     useAddPostMutation,
// } = contactsApi;
