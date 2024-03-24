import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-5 px-5">
      {
        users.map(user => <User key={user.id} user={user}/>)
      }
    </div>
  );
};

export default Users;