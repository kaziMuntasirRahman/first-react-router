import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const User = ({ user }) => {
  const { id, name, address, website, phone } = user;
  return (
    <div key={id} className="flex flex-col border rounded p-3 bg-emerald-300 border border-black">
      <h1>{id}</h1>
      <h2 className="text-lg font-semibold">{name}</h2>
      <h2>{address.city}</h2>
      <h2>{website}</h2>
      <h2>{phone}</h2>
      <Link to={`/user/${id}`} className="border border-black px-4 self-end">See Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,

}
export default User;