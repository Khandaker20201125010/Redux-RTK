import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints:(builder)=> ({
        getPosts: builder.query({
             query : ()=> ({url:'/posts'}),
        }),
        getUsers: builder.query({
             query : ()=>'/users'
        }),
        getPostById: builder.query({
             query : (id)=>`/posts/${id}`
        }),
        setPost: builder.mutation({
          query: (post) => ({
               url: '/posts',
               method: 'POST',
               body: post,
          })
        })

    }),
})
export const {useGetPostsQuery, useGetUsersQuery, useGetPostByIdQuery,useSetPostMutation} = baseApi

export default baseApi