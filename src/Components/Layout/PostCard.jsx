import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className='bg-zinc-800 rounded-md p-10 text-white'>
            <h1 className='mb-5 text-xl font-semibold hover:underline cursor-pointer'>{post?.title}</h1>
            <p className='border-b border-zinc-700 my-5'>{post?.body}</p>
        </div>
    );
};

export default PostCard;
