import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (

    <div className="flex flex-col text-center border text-2xl px-[400px]">
      <h1>id: {id}</h1>
      <h1>title: <strong>{title}</strong></h1>
      <h1>Description: {body}</h1>
    </div>
  );
};

export default PostDetails;