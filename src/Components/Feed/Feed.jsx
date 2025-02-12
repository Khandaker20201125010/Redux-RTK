import { useForm } from "react-hook-form";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
} from "../../redux/features/api/baseapi";
import PostCard from "../Layout/PostCard";

const Feed = () => {
  const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);
  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const { register, handleSubmit } = useForm();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Feed</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="border mb-2" type="text" {...register("post")} />

        <button className="bg-zinc-500" type="submit">Submit</button>
      </form>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => <PostCard key={post.id} post={post} />)} */}
        <PostCard key={post.id} post={post} />
      </div>
    </div>
  );
};

export default Feed;
