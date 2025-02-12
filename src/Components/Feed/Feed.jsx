import { useGetPostsQuery } from "../../redux/features/api/baseapi";
import PostCard from "../Layout/PostCard";

const Feed = () => {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Feed</h1>
            <div className="flex flex-col gap-3"> 
                {posts?.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default Feed;
