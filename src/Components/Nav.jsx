import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-10 justify-center underline p-6 text-xl">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

  );
};

export default Nav;