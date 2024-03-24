import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="grid grid-cols-3 gap-5 px-5">
      {
        users.map(user => (
          <div key={user.id} className="border rounded p-3 bg-emerald-300 border border-black">
            <h1>{user.id}</h1>
            <h2 className="font-semibold">{user.name}</h2>
            <h2>{user.address.city}</h2>
            <h2>{user.website}</h2>
            <h2>{user.phone}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default Users;