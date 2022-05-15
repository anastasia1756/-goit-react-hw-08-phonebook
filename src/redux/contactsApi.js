import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  tagTypes: ['Contacts'],
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),
    addPost: build.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeletePostMutation,
  useAddPostMutation,
} = contactsApi;
