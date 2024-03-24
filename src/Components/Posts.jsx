import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-5 px-5">
      {
        posts.map(post => <Post key={post.id} post={post}/>)
        // posts.map(post => <h1 key={post.id}>Hello</h1>)
      }
    </div>
  );
};

export default Posts;