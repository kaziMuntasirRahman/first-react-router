import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div key={id} className="flex flex-col border rounded p-3 bg-emerald-300 border border-black">
      <h1>{id}</h1>
      <h2>{title}</h2>
      <Link to={`/post/${id}`} className="border border-black px-4 self-end">See Details</Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object
}

export default Post;